import {ruEn} from "./ru-En";

export function locale() {
  const title = document.querySelector(".myTitle");
  const projects = document.querySelector(".my-projects");
  const certificates = document.querySelector(".my-certificates.js");
  const locale = document.querySelector(".locale");
  const name = document.querySelector(".hero-area__wrapper__name");
  const profession = document.querySelector(".hero-area__wrapper__profession");
  const aboutMe = document.querySelector(".hero-area__wrapper__button");
  const aboutMe2 = document.querySelector(".subsection__information__title");
  const introduction = document.querySelector(
    ".subsection__information__subtitle"
  );
  const projectsTitle = document.querySelector(".projects__title");
  const certificatesTitle = document.querySelector(".certificates__title");
  const contactBoxTitle = document.querySelector(".contact-box__title");
  const contactBoxName = document.querySelector(
    ".contact-box__field_type_name"
  );
  const contactBoxEmail = document.querySelector(
    ".contact-box__field_type_email"
  );
  const contactBoxMessage = document.querySelector(
    ".contact-box__field_type_message"
  );
  const sendButton = document.querySelector(".send-button");

  locale.addEventListener("click", () => {
    if (locale.classList.contains("locale_active")) {
      locale.lang = "en";
      locale.classList.remove("locale_active");
    } else {
      locale.classList.add("locale_active");
      locale.lang = "ru";
    }
    const lang = locale.getAttribute("lang");

    projects.textContent = ruEn[lang].projects;
    certificates.textContent = ruEn[lang].certificates;
    title.textContent = ruEn[lang].title;
    name.textContent = ruEn[lang].name;
    profession.textContent = ruEn[lang].profession;
    aboutMe.textContent = ruEn[lang].about_me;
    aboutMe2.textContent = ruEn[lang].about_me;
    introduction.textContent = ruEn[lang].introduction;
    projectsTitle.textContent = ruEn[lang].projects_title;
    certificatesTitle.textContent = ruEn[lang].certificates_title;
    contactBoxTitle.textContent = ruEn[lang].contact_box_title;
    sendButton.textContent = ruEn[lang].send_button;
    contactBoxName.placeholder = ruEn[lang].contact_box_name;
    contactBoxEmail.placeholder = ruEn[lang].contact_box_email;
    contactBoxMessage.placeholder = ruEn[lang].contact_box_message;
  });
}
