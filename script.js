let selectedFlower = '';
let stage = 0;
const maxStages = 7;

const messages = {
    selection: "Hello, babyyy!!! Pili ka na lang ng gusto mong flowers hehe. Di nga lang accurate yan T_T.",
    growing: {
        rose: [
            "Hello, babyyy!! As you can see hindi talaga siya accurate at sorry kase ganyan. Anyway, I chose rose to be one of the three flowers na inaalay ko sayo, kase sabi sa research, -A rose is a powerful symbol of love and romance, often representing deep emotions.- ",
            "You know naman kung gaano kita kamahal. Kase aside from God, ikaw ang no.1 sa puso ko. Literal na inlove na inlove ako sayo e, ayieee HAHA",
            "Tsaka, baby, sabi raw sa research -The meaning of a rose in love can vary depending on its color- That's why I chose brown to be it's color.",
            "Alam ko na iniisip mo na -Huh? May rose bang brown- Siyempre meron, at ayan ang nag-iisang mahal kong rose.",
            "Kaside from it's symbolize your favorite color, it's literally created because of you.",
            "In fact, sa tuwing nakakakita ako ng brown, ikaw agad naiisip ko. Lalo na yung napakagandang ngiti mo sa tuwing nakakakita ka ng brown",
            "Lalo na yung favorite lines mo na -Uy may brown- at -Bakit walang brown?- Kaya ayun, di ako mapakali at napapahanap ako ng brown HAHAHA",
            "Anyway, this is the end of the slide, baby and as you can see, nag-full bloom na yung brown rose and it shines like your endless overflowing beauty hehe. I hope na napangiti kita sa 1st flower na ito. Also, I just want to greet you a happy happy 5th monthsary and a brown rose for you.😁"
        ],
        tulip: [
            "Hello, babyyy!! Sorry ulit kase kahit ito ay hindi ganun ka-accurate huhu. Anyway, I chose tulip because aside from it's super cute, according to research, -Tulips are one of the most beloved flowers in the language of love- and -They're elegant, simple, and timeless—often associated with true love that's undying and sincere-",
            "As you can see, that flower describes you, -Simple but Elegant-, also it describes our love. -True love that's undying and sincere-",
            "Sabi rin dito, -Like rose, it carry rich symbolism depending on their color- At alam ko mapapasabi ka na naman na -Wala naman atang Brown Tulips- But wrong ka po, babyyy.",
            "It's a rare type of tulips that is not typically found in nature. Kagaya mo, you have the unique type of beauty, but that beauty beats all kind of you, your beauty is the no.1 beauty.",
            "Sabi rin dito, -In the language of love and emotion, brown tulips is a great choice if you want to express a mature, comforting kind of love—less flashy, more soulful.- Like our love, like our relationship",
            "Tsaka papanong di gaganda at magiging unique yan?? Eh favorite color yan ng asawa ko, favorite color mo yan.",
            "Literal na nag-boom ang ganda ng flowers bigla e. It look simplier but we can't deny na every thing that has similarity as your beauty, wala nang makakatalo sa ganda niyan, ganda mo yan ihh. Nahawa sa kagandahan mo",
            "Yes, babyy. Ikaw na yan e, ang pinakamagandang babae sa mundo at balang-araw ay makakasama ko sa altar ng Dyos at papakasalan ko. Anyway, happy 5th Monthsary, baby!! I hope you enjoy this second flower hehe"
        ],
        normal: [
            "And this is the last flower na inaalay ko sayo. The last but honestly, it's the best. Ang favorite flower ko 😁. At mukhang di ko na kailangan i-search yung sinisymbolize niya sa love e. Alam mo kung bakit, baby?",
            "Because alam ko na yun, and ikaw ang nag-iisang rason kung bakit ko nalaman yan. Yup, so ito na nga. Sunflowers symbolize how great love is and how deeply it can impact a person.",
            "-2/14/25- The one of the happiest days of my life. Isa sa mga araw na nasabi ko sa sarili ko na -So this is what true love is?-, -Do I deserve this kind love- and -Napaka-swerte ko!! This is the first flower of my life.",
            "At nanggaling pa sa taong ipinagkaloob sakin ng Diyos na pinakamamahal ko higit sa lahat, ang babaeng papakasalan ko sa tamang panahon at tamang oras. At ikaw yun, babyy, wala nang iba.",
            "Actually, hanngang ngayon is kilig na kilig na kilig pa rin ako. Kase before yung day na yan, one of my friends asked me -Drei, ano magandang regalo sa lalake- and I answered her -Flowers- kase kapag namatay lang ang lalake, tsaka sila nakakatanggap ng bulaklak-",
            "But pinatunayan mo sakin na hindi ako magiging parte nun, na meron akong ikaw na magbibigay sakin nang ganun. And I wasn't expecting it, baby. Sobrang thank you and I love you!!! You always made me feel and realize how special I am.",
            "It instantly become my favorite flower na sa kahit saan ko man makita, ikaw at ang the best experience na binigay mo sakin ang parati kong maaalala.",
            "Kaya for the last flower, it's sunflower. The most beautiful flower of all, the flower that has a brown centered-circle, which symbolize us, me as the petals and you as the center of myself. You're the only circle I want to rotate with forever!! Happy 5th Monthsary, baby!! I love you so much!!!"
        ]
    }
};


const selectionPage = document.getElementById('selection-page');
const flowerPage = document.getElementById('flower-page');
const flowerTypeDisplay = document.getElementById('flower-type-display');
const flowerContainer = document.getElementById('flower-container');
const nextButton = document.getElementById('next-button');
const messageBox = document.getElementById('dynamic-message');

function init() {
    nextButton.addEventListener('click', nextStage);
    showSelectionPage();
}

function showSelectionPage() {
    selectionPage.style.display = 'block';
    flowerPage.style.display = 'none';
    messageBox.textContent = messages.selection;
    stage = 0;
}

function showFlowerPage() {
    selectionPage.style.display = 'none';
    flowerPage.style.display = 'block';
    flowerTypeDisplay.textContent = selectedFlower === 'rose' ? 'Rose' : selectedFlower === 'tulip' ? 'Tulip' : 'Sunflower';
    drawFlower();
}

function selectFlower(type) {
    selectedFlower = type;
    showFlowerPage();
}

function nextStage() {
    if (stage < maxStages) {
        stage++;
        drawFlower();
        if (stage === maxStages) nextButton.textContent = 'Lipat ka sa ibang flower, baby 😁';
    } else {
        showSelectionPage();
        nextButton.textContent = 'Next';
    }
}
function drawFlower() {
    flowerContainer.innerHTML = '';

    const flowerMessages = messages.growing[selectedFlower] || messages.growing.normal;
    messageBox.textContent = flowerMessages[Math.min(stage, flowerMessages.length - 1)];

    switch(selectedFlower) {
        case 'rose':
            drawRose();
            break;
        case 'tulip':
            drawTulip();
            break;
        default:
            drawNormalFlower();
    }
}


function drawRose() {
    const center = document.createElement('div');
    center.className = 'flower-part rose-center';
    flowerContainer.appendChild(center);

    for (let i = 0; i < 6 + stage * 3; i++) {
        const petal = document.createElement('div');
        petal.className = 'flower-part rose-petal';
        petal.style.transform = `rotate(${i * 360 / (6 + stage * 3)}deg) translateY(-30px)`;
        flowerContainer.appendChild(petal);
    }
}

function drawTulip() {
    for (let i = 0; i < 3 + stage * 2; i++) {
        const petal = document.createElement('div');
        petal.className = 'flower-part tulip-petal';
        petal.style.transform = `rotate(${i * 360 / (3 + stage * 2)}deg)`;
        flowerContainer.appendChild(petal);
    }
}

function drawNormalFlower() {
    // Clear previous flower
    flowerContainer.innerHTML = '';
    
    // Create and position center
    const center = document.createElement('div');
    center.className = 'flower-part sunflower-center';
    flowerContainer.appendChild(center);
    
    // Create petals
    const totalPetals = 20 + stage * 2;
    for (let i = 0; i < totalPetals; i++) {
        const petal = document.createElement('div');
        petal.className = 'flower-part sunflower-petal';
        petal.style.transform = `rotate(${i * 360 / totalPetals}deg) translateY(-40px)`;
        flowerContainer.appendChild(petal);
    }
}
document.addEventListener('DOMContentLoaded', init);
