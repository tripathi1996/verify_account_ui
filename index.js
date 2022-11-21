let otp_boxes = document.querySelectorAll(".otp")
otp_boxes[0].focus()
otp_boxes.forEach((e, i) => {
    e.addEventListener("keydown", (event) => {

        if (event.key >= 0 && event.key <= 9) {
            if (i === otp_boxes.length - 1) {
                return;
            }
            e.classList.add("valid")
            setTimeout(() => {
                otp_boxes[i + 1].focus();
            }, 100);
        } else if ((event.key = "Backspace")) {
            otp_boxes[i - 1].classList.remove("valid")
            setTimeout(() => {
                otp_boxes[i - 1].value = "";
                otp_boxes[i - 1].focus();
            }, 100);

        }
    });
});