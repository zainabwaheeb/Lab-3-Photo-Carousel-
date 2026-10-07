let stories = {
    one: {
        label: "Story 1: A Morning Surf",
        scenes: [
            {
                src: "images/sunrise.png",
                title: "Before the water",
                caption: "Still on dry sand, looking out at the ocean. Nothing has happened yet."
            },
            {
                src: "images/surfing.jpg",
                title: "Out past the break",
                caption: "This is the moment the whole morning was heading toward."
            },
            {
                src: "images/shore.jpg",
                title: "Back on the sand",
                caption: "Wet and tired. The morning ends here."
            }
        ]
    },

    two: {
        label: "Story 2: Can't Stop",
        scenes: [
            {
                src: "images/surfing.jpg",
                title: "Already out there",
                caption: "No setup this time. We start in the middle of the wave, and we don't know how the surfer got here."
            },
            {
                src: "images/shore.jpg",
                title: "Back on the beach",
                caption: "Back on the beach, catching breath. Is this the end of the day, or just a break?"
            },
            {
                src: "images/sunrise.png",
                title: "Already thinking about tomorrow",
                caption: "It looks like the surfer is planning to go back out."
            }
        ]
    }
};

// keeps track of the current story and image
let currentStory = stories.one;
let currentImage = 0;

function showScene() {
    let scene = currentStory.scenes[currentImage];

    document.getElementById("mainImage").src = scene.src;
    document.getElementById("imageTitle").innerHTML = scene.title;
    document.getElementById("imageCaption").innerHTML = scene.caption;
    document.getElementById("storyLabel").innerHTML = currentStory.label;
    document.getElementById("imageNumber").innerHTML =
        (currentImage + 1) + " of " + currentStory.scenes.length;
}

function highlightButton() {
    let buttonOne = document.getElementById("storyOneButton");
    let buttonTwo = document.getElementById("storyTwoButton");

    buttonOne.style.backgroundColor = "transparent";
    buttonOne.style.color = "#f1e9dc";
    buttonTwo.style.backgroundColor = "transparent";
    buttonTwo.style.color = "#f1e9dc";

    if (currentStory === stories.one) {
        buttonOne.style.backgroundColor = "#e8794a";
        buttonOne.style.color = "#14202b";
    } else {
        buttonTwo.style.backgroundColor = "#e8794a";
        buttonTwo.style.color = "#14202b";
    }
}

function nextScene() {
    currentImage = currentImage + 1;

    if (currentImage >= currentStory.scenes.length) {
        currentImage = 0;
    }

    showScene();
}

function previousScene() {
    currentImage = currentImage - 1;

    if (currentImage < 0) {
        currentImage = currentStory.scenes.length - 1;
    }

    showScene();
}

function chooseStory(story) {
    currentStory = story;
    currentImage = 0;

    showScene();
    highlightButton();
}

document.getElementById("nextButton").addEventListener("click", nextScene);
document.getElementById("previousButton").addEventListener("click", previousScene);

document.getElementById("mainImage").addEventListener("click", nextScene);

document.getElementById("storyOneButton").addEventListener("click", function() {
    chooseStory(stories.one);
});

document.getElementById("storyTwoButton").addEventListener("click", function() {
    chooseStory(stories.two);
});

chooseStory(stories.one);