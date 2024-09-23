const fileSelectEle = document.querySelector('input');
const form = document.querySelector('Form');
const jsDiv = document.querySelector('.js-div');

form.addEventListener('click', () => {
    fileSelectEle.click();
});

fileSelectEle.addEventListener('change', (event) => {
    const files = event.target.files;

    for (let file of files) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const newUploader = document.createElement('div')
            newUploader.classList.add('uploader')
            newUploader.style.display = 'block'
            newUploader.style.display = 'flex'

            const newImage = document.createElement('img')
            newImage.classList.add('upload-image')
            newImage.src = e.target.result;
            newUploader.appendChild(newImage);

            const newImageTitle = document.createElement('p')
            newImageTitle.classList.add('image-title')
            newImageTitle.textContent = file.name;
            newUploader.appendChild(newImageTitle);

            newUploader.addEventListener('click', () => {
                window.open(newImage.src, '_blank');

            });

            jsDiv.appendChild(newUploader)
        };
        reader.readAsDataURL(file);
    }
});
