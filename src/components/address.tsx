import React from "react";

export default function Address() {
  return (
    <div data-aos="fade-up" className="md:px-20 px-10 py-10 scroll-mt-20" id="lokasi">
      <p className="text-xl font-bold md:text-center md:text-2xl mb-5">Datang langsung ke tempat kami !</p>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.401299338124!2d108.00908320210249!3d-6.315479845813303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e694d18d925431d%3A0xda7deab339843d98!2sPasar%20Bugel!5e0!3m2!1sid!2sid!4v1723633690487!5m2!1sid!2sid"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pasar Bugel"
          className="w-full h-72"
        ></iframe>
      </div>
    </div>
  );
}