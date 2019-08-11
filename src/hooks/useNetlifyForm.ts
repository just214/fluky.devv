import React from "react";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function useNetlifyForm() {
  const handleSubmit = values => {
    return fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  };

  return handleSubmit;
}

export default useNetlifyForm;
