function calculateAge() {
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();

    if (dob == "Invalid Date") {
      document.getElementById("result").innerText = "Please select a valid date.";
      return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += prevMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    document.getElementById("result").innerText =
      `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
  }