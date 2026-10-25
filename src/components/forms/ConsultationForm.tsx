"use client";

import Link from "next/link";
import { cloneElement, useState, type FormEvent, type ReactElement } from "react";
import { useSearchParams } from "next/navigation";
import { inquiryOptions, serviceParamToCategory } from "@/data/inquiry";

type Values = {
  name: string;
  email: string;
  phone: string;
  category: string;
  location: string;
  size: string;
  budget: string;
  timeline: string;
  description: string;
  consent: boolean;
};

const empty: Values = {
  name: "",
  email: "",
  phone: "",
  category: "",
  location: "",
  size: "Not specified",
  budget: "Not specified",
  timeline: "Not specified",
  description: "",
  consent: false,
};

function validate(values: Values) {
  const errors: Record<string, string> = {};
  if (values.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (values.phone.trim() && values.phone.replace(/\D/g, "").length < 7) errors.phone = "Enter a telephone number, or leave this blank.";
  if (!inquiryOptions.categories.includes(values.category as (typeof inquiryOptions.categories)[number])) {
    errors.category = "Select a project category.";
  }
  if (values.location.trim().length < 2) errors.location = "Enter the project location.";
  if (values.description.trim().length < 24) errors.description = "Describe the project in a few sentences.";
  if (!values.consent) errors.consent = "Confirm that you have read the privacy note.";
  return errors;
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: ReactElement<{ id?: string; "aria-invalid"?: boolean; "aria-describedby"?: string }>;
}) {
  const errorId = `${id}-error`;
  const hintId = hint ? `${id}-hint` : undefined;
  const describedBy = [hintId, error ? errorId : undefined].filter(Boolean).join(" ") || undefined;
  return (
    <div>
      <label htmlFor={id} className="text-[0.72rem] tracking-[0.16em] text-walnut uppercase">
        {label}
      </label>
      {cloneElement(children, {
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
      })}
      {hint ? (
        <p id={hintId} className="mt-2 text-sm text-walnut">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-charcoal">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ConsultationForm() {
  const params = useSearchParams();
  const preset = serviceParamToCategory[params.get("service") ?? ""] ?? "";
  const [values, setValues] = useState<Values>({ ...empty, category: preset });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [phase, setPhase] = useState<"edit" | "checked">("edit");
  const [copyState, setCopyState] = useState("");

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const first = ["name", "email", "phone", "category", "location", "description", "consent"].find((key) => nextErrors[key]);
    if (first) {
      document.getElementById(`field-${first}`)?.focus();
      return;
    }
    setPhase("checked");
    setCopyState("");
  }

  async function copyDetails() {
    const text = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Telephone: ${values.phone || "Not provided"}`,
      `Category: ${values.category}`,
      `Location: ${values.location}`,
      `Size: ${values.size}`,
      `Budget: ${values.budget}`,
      `Timeline: ${values.timeline}`,
      "",
      values.description,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopyState("Copied.");
    } catch {
      setCopyState("Select the summary below and copy it from there.");
    }
  }

  if (phase === "checked") {
    return (
      <div role="status" className="border-t border-divider pt-8">
        <h2 className="text-4xl text-charcoal">Your note stays on this page.</h2>
        <p className="mt-4 text-walnut">
          These details were checked in your browser. They were not sent and they were not stored. Connect a submission endpoint before launch if the studio should receive inquiries.
        </p>
        <dl className="mt-8 space-y-3 text-sm">
          {[
            ["Name", values.name],
            ["Email", values.email],
            ["Telephone", values.phone || "Not provided"],
            ["Category", values.category],
            ["Location", values.location],
            ["Size", values.size],
            ["Budget", values.budget],
            ["Timeline", values.timeline],
          ].map(([label, value]) => (
            <div key={label} className="grid gap-1 border-t border-divider py-3 sm:grid-cols-3">
              <dt className="text-walnut">{label}</dt>
              <dd className="text-charcoal sm:col-span-2">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-charcoal">{values.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" className="btn btn-dark" onClick={copyDetails}>
            Copy details
          </button>
          <button type="button" className="btn border border-charcoal" onClick={() => setPhase("edit")}>
            Edit again
          </button>
        </div>
        {copyState ? <p className="mt-3 text-sm text-walnut">{copyState}</p> : null}
      </div>
    );
  }

  const errorList = Object.entries(errors);

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-7">
      {errorList.length > 0 ? (
        <div role="alert" className="border border-divider bg-ivory p-4">
          <p className="text-sm text-charcoal">Some fields need attention.</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-walnut">
            {errorList.map(([key, message]) => (
              <li key={key}>
                <a href={`#field-${key}`} className="link-line">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <Field id="field-name" label="Full name (required)" error={errors.name}>
        <input className="field" autoComplete="name" value={values.name} onChange={(event) => update("name", event.target.value)} />
      </Field>
      <Field id="field-email" label="Email address (required)" error={errors.email}>
        <input className="field" type="email" autoComplete="email" inputMode="email" value={values.email} onChange={(event) => update("email", event.target.value)} />
      </Field>
      <Field id="field-phone" label="Telephone (optional)" error={errors.phone}>
        <input className="field" type="tel" autoComplete="tel" inputMode="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} />
      </Field>
      <Field id="field-category" label="Project category (required)" error={errors.category}>
        <select className="field" value={values.category} onChange={(event) => update("category", event.target.value)}>
          <option value="">Select a category</option>
          {inquiryOptions.categories.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>
      <Field id="field-location" label="Project location (required)" error={errors.location}>
        <input className="field" autoComplete="address-level2" value={values.location} onChange={(event) => update("location", event.target.value)} />
      </Field>
      <Field id="field-size" label="Approximate project size (optional)">
        <select className="field" value={values.size} onChange={(event) => update("size", event.target.value)}>
          {inquiryOptions.sizes.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>
      <Field
        id="field-budget"
        label="Estimated budget (optional)"
        hint="Currency is not set. These bands are placeholders, not a fee list."
      >
        <select className="field" value={values.budget} onChange={(event) => update("budget", event.target.value)}>
          {inquiryOptions.budgets.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>
      <Field id="field-timeline" label="Desired project timeline (optional)">
        <select className="field" value={values.timeline} onChange={(event) => update("timeline", event.target.value)}>
          {inquiryOptions.timelines.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>
      <Field id="field-description" label="Project description (required)" error={errors.description}>
        <textarea className="field min-h-36 resize-y" value={values.description} onChange={(event) => update("description", event.target.value)} />
      </Field>
      <div>
        <div className="flex items-start gap-3">
          <input
            id="field-consent"
            type="checkbox"
            className="mt-1 h-4 w-4"
            checked={values.consent}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "field-consent-error" : undefined}
            onChange={(event) => update("consent", event.target.checked)}
          />
          <label htmlFor="field-consent" className="text-sm leading-relaxed text-walnut">
            I have read the privacy note and understand this form does not send or store my information yet.
          </label>
        </div>
        <Link href="/privacy" className="link-line mt-3 inline-flex text-sm text-charcoal">
          Read the privacy note
        </Link>
        {errors.consent ? (
          <p id="field-consent-error" className="mt-2 text-sm text-charcoal">
            {errors.consent}
          </p>
        ) : null}
      </div>
      <button type="submit" className="btn btn-dark">
        Check my note
      </button>
    </form>
  );
}
