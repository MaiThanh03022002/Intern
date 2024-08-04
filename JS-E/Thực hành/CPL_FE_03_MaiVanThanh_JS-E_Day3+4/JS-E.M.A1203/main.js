const theImages = [
    {
        src: "https://picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
        width: "300",
        height: "300"
    },
    {
        src: "https://picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE",
        width: "300",
        height: "300"
    },
    {
        src: "https://picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs",
        width: "300",
        height: "300"
    },
    {
        src: "https://picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
        width: "300",
        height: "300"
    },
    {
        src: "https://picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w",
        width: "300",
        height: "300"
    },
    {
        src: "https://picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
        width: "300",
        height: "300"
    }
];
generateRandomImages();
document.getElementById('generateButton').addEventListener('click', generateRandomImages);

function generateRandomImages() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    const randomImages = getRandomImages(theImages, 3);
    randomImages.forEach((image,index )=> {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.width = image.width;
        imgElement.height = image.height;
        imgElement.alt=`anh thu ${index+1}`
        imageContainer.appendChild(imgElement);
    });
}

function getRandomImages(arr, count) {
    const result = [];
    const usedIndices = new Set();

    while (result.length < count) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (!usedIndices.has(randomIndex)) {
            result.push(arr[randomIndex]);
            usedIndices.add(randomIndex);
        }
    }

    return result;
}