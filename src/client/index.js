import { checkURL } from "./js/urlCheck"
import { handleSubmit } from "./js/formHandler"

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

window.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById('btn-submit');
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        handleSubmit();
    })
});