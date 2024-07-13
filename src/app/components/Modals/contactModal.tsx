"use client";
import { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { useFormspark } from "@formspark/use-formspark";
import { useModal } from "../../../contexts/ModalContext";
import SubmitConfirmModal from "./submitConfirmModal";
import SiteButton from "../UI-Elements/SiteButton";
import Link from "next/link";

const FORMSPARK_FORM_ID = "DMLc8XCVF";

export default function ContactModal() {
  const { showModal } = useModal();
  const [submit] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const [submitConfirm, setSubmitConfirm] = useState("");
  const [buttonDisplay, setButtonDisplay] = useState("SEND MESSAGE");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (form.checkValidity()) {
      try {
        setButtonDisabled(true);
        setButtonDisplay("Sending...");

        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());

        await submit(formValues);

        setButtonDisplay("Sent!");
        setTimeout(() => showModal(<SubmitConfirmModal />), 500);
      } catch (error) {
        console.error("Request failed:", error);
        setButtonDisplay("SEND MESSAGE");
        setSubmitConfirm(
          "We're sorry, there was an error sending your message. Please try again later!",
        );
        setButtonDisabled(false);
      }
    } else {
      form.reportValidity();
      return;
    }
  }

  return (
    <ModalWrapper>
      <div className="contactModal">
        <div className="formWrapper relative flex max-h-[100dvh] w-full max-w-[500px] flex-col px-2 pb-4  xs:px-8">
          <h1 className="text-gradient-clip mb-3 border-b border-dotted border-gray-400 pb-4 text-center text-4xl font-bold uppercase leading-10 tracking-widest text-primaryDark xs:text-4xl sm:text-5xl">
            Contact
          </h1>
          <p className="formDescription m-0 w-full text-center text-gray-300">
            {`Looking to work together? Curious about my services? Schedule a meeting or reach out!`}
          </p>

          {/* Contact Form */}
          <form
            className="contactForm flex w-full flex-col items-center gap-2 pt-2 text-start text-gray-300 xs:gap-6 xs:pt-5"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Name Input */}

            <div className="NameSection flex w-full gap-6">
              <div className="FirstNameContainer flex w-full flex-col gap-1">
                <label className="m-0 text-gray-400" htmlFor="name">
                  First Name:
                </label>
                <input
                  className="FirstNameInput mt-0.5 box-border h-[32px] w-full rounded-md border border-white/20 bg-gray-900 p-1 text-gray-300"
                  type="text"
                  id="first-name"
                  name="first-name"
                  minLength={2}
                  required
                />
              </div>
              <div className="LastNameContainer flex w-full flex-col gap-1">
                <label className="m-0 text-gray-400" htmlFor="name">
                  Last Name:
                </label>
                <input
                  className="LastNameInput mt-0.5 box-border h-[32px] w-full rounded-md border border-white/20 bg-gray-900 p-1 text-gray-300"
                  type="text"
                  id="last-name"
                  name="last-name"
                  minLength={2}
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="EmailContainer w-full">
              <label className="m-0 text-gray-400" htmlFor="email">
                Email:
              </label>
              <input
                className="EmailInput mt-0.5 box-border h-[32px] w-full rounded-md border border-white/20 bg-gray-900 p-1 text-gray-300"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="MessageContainer w-full">
              <label className="m-0 text-gray-400" htmlFor="message">
                Message:
              </label>
              <textarea
                className="MessageInput mt-1 box-border w-full rounded-md border border-white/20 bg-gray-900 p-1 text-gray-300"
                id="message"
                name="message"
                rows={4}
              ></textarea>

              <div className="contactFormSubmitMessage mt-2.5 w-full text-center text-red-500">
                {submitConfirm}
              </div>
            </div>

            {/* Buttons */}
            <div className="ButtonContainer flex h-fit w-full flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <Link
                rel="noopener noreferrer"
                href="https://calendly.com/jduncan017/1-hour-meeting"
                target="_blank"
                type="button"
              >
                <SiteButton
                  textColor="text-gray-300 uppercase sm:text-xs"
                  style="silverHollow"
                >
                  Schedule a Meeting
                </SiteButton>
              </Link>
              <SiteButton
                type="submit"
                disabled={buttonDisabled}
                aria="submit"
                textColor="text-black uppercase sm:text-xs"
                style="silver"
              >
                {buttonDisplay}
              </SiteButton>
            </div>
          </form>
        </div>
      </div>
    </ModalWrapper>
  );
}
