import { checkURL } from "./urlCheck"
const post = async(url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try {
        return await response.json();
    } catch (exception) {
        console.log(exception.message);
    }
};

const handleSubmit = async() => {
    const url = document.getElementById("articleURL").value;
    if (checkURL(url)) {
        await post("http://localhost:8081/add-url", { userURL: url }).then(
            (data) => {
                document.getElementById("score_tag").innerHTML = `Score tag: ${data.score_tag}`;
                document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
                document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
                document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
                document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
            }
        );
    } else {
        alert("URL entered is not a valid one ");
    }
};

export { handleSubmit };