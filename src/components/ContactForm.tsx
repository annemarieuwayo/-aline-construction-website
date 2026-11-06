"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { categories } from "@/data/products";

type FormFields = { name: string; phone: string; product: string; message: string };

export function ContactForm() {
  const [form, setForm] = useState<FormFields>({ name: "", phone: "", product: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [checked, setChecked] = useState(false);

  function updateField(field: keyof FormFields, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setChecked(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<FormFields> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.phone.trim()) nextErrors.phone = "Please enter a phone number.";
    else if (form.phone.replace(/\D/g, "").length < 7) nextErrors.phone = "Enter a valid phone number.";
    if (!form.message.trim()) nextErrors.message = "Please add a short message.";
    setErrors(nextErrors);
    setChecked(Object.keys(nextErrors).length === 0);
  }

  return (
    <div className="contact-form-card">
      <div className="contact-form-heading">
        <p className="eyebrow">Send an inquiry</p>
        <h2>What can we help you find?</h2>
        <p>Share a few details and the product you are looking for.</p>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="customer-name">Your name <span>*</span></label>
          <input id="customer-name" autoComplete="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "customer-name-error" : undefined} />
          {errors.name && <p className="field-error" id="customer-name-error">{errors.name}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="customer-phone">Phone number <span>*</span></label>
          <input id="customer-phone" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "customer-phone-error" : undefined} />
          {errors.phone && <p className="field-error" id="customer-phone-error">{errors.phone}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="customer-product">Product of interest</label>
          <select id="customer-product" value={form.product} onChange={(event) => updateField("product", event.target.value)}>
            <option value="">Select a category (optional)</option>
            {categories.map((category) => <option value={category} key={category}>{category}</option>)}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="customer-message">Message <span>*</span></label>
          <textarea id="customer-message" rows={5} value={form.message} onChange={(event) => updateField("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "customer-message-error" : undefined} />
          {errors.message && <p className="field-error" id="customer-message-error">{errors.message}</p>}
        </div>
        <button className="button button-yellow contact-submit" type="submit">Check inquiry <ArrowRight aria-hidden="true" size={17} /></button>
      </form>
      {checked && (
        <div className="form-status" role="status">
          <CheckCircle2 aria-hidden="true" size={18} />
          <p>Your details are complete. This form is not connected to a submission service, so your message has <strong>not been sent</strong>. Please contact Aline by phone or WhatsApp.</p>
        </div>
      )}
      <p className="form-privacy-note">Required fields are checked in your browser. No information is sent or stored.</p>
    </div>
  );
}
