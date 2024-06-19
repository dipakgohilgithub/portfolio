function copyCode() {
    const codeToCopy = document.getElementById('codeSnippet').innerText.trim();
    const el = document.createElement('textarea');
    el.value = codeToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    const copyBtn = document.querySelector('.copy-btn');
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied';
    setTimeout(function () {
        copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy';
    }, 2000);
}