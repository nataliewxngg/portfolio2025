import profileImage from '../assets/profile-pic.jpg';

import chapterCreator from '../components/chapter'
import skillCardCreator from '../components/skillCard';
import hobbyCardCreator from '../components/hobbyCard';
import svgElementCreator from '../components/svgElement';

import html5Logo from '../assets/techstack-logos/html5-icon.svg';
import css3Logo from '../assets/techstack-logos/css3-icon.svg';
import jsLogo from '../assets/techstack-logos/javascript-icon.svg';
import pythonLogo from '../assets/techstack-logos/python-icon.svg';
import javaLogo from '../assets/techstack-logos/java-icon.svg';
import cppLogo from '../assets/techstack-logos/c++-icon.svg';
import csharpLogo from '../assets/techstack-logos/csharp-icon.svg';

import cookingPic from '../assets/hobbies/cooking.jpg';
import basketballPic from '../assets/hobbies/basketball.jpg';
import instrumentalMusicPic from '../assets/hobbies/instrumental-music.jpg';

import azureFundamentalsCert from '../assets/azure-fundamentals-certificate.png';
import azureAIFundamentalsCert from '../assets/azure-ai-fundamentals-certificate.png';

export default function about() {
    // Set page title
    const title = document.querySelector('title');
    title.innerText = 'About | Natalie Wong';

    // Set active page
    const aboutButton = document.querySelector('#about-button');
    aboutButton.classList.add('active');

    const content = document.querySelector('#content');

    // Header
    const header = document.createElement('header');
    header.setAttribute('id', 'header-container');
    header.classList.add('about');

    const headerTextContainer = document.createElement('div');
    headerTextContainer.setAttribute('id', 'header-text-container');


    const locationContainer = document.createElement('div');
    locationContainer.setAttribute('id', 'location-container');
    const location = document.createElement('p');
    location.setAttribute('id', 'location');
    location.innerText = 'Based in Canada';
    const locationSVG = svgElementCreator(
        'http://www.w3.org/2000/svg', 
        '0 0 24 24', 
        'M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'
    );
    locationContainer.appendChild(locationSVG);
    locationContainer.appendChild(location);

    const headerTitle = document.createElement('h1');
    headerTitle.setAttribute('id', 'header-title');
    headerTitle.innerText = 'About Me';

    const headerDescription = document.createElement('p');
    headerDescription.setAttribute('id', 'header-desc');
    headerDescription.innerText = 'Hey! I\'m Natalie, a computer engineering student at the University of Waterloo. \n\nAs a driven individual passionate about software development, I have cultivated a strong foundation in the field, gaining competence in a multitude of programming/markup languages and technologies. \n\nWith my skills and expertise, I am eager to contribute to the ongoing growth of today\'s technologies through meaningful and collaborative work.'
    
    const headerImage = document.createElement('img');
    headerImage.setAttribute('id', 'header-image');
    headerImage.setAttribute('src', profileImage);
    headerImage.setAttribute('alt', 'Natalie Wong');
    
    locationContainer.appendChild(locationSVG);
    locationContainer.appendChild(location);
    headerTextContainer.appendChild(locationContainer);
    headerTextContainer.appendChild(headerTitle);
    headerTextContainer.appendChild(headerDescription);
    header.appendChild(headerTextContainer);
    header.appendChild(headerImage);
    content.appendChild(header);

    // Story
    const storySection = document.createElement('section');
    storySection.setAttribute('id', 'story-container');
    storySection.classList.add('about');

    const storyTitle = document.createElement('h2');
    storyTitle.setAttribute('id', 'story-title');
    storyTitle.innerText = 'My Story';

    const story = document.createElement('div');
    story.setAttribute('id', 'story');
    story.appendChild(chapterCreator(1, 'Developing Interest', 'I was first introduced to programming at the age of 14 when my sister, who enrolled in an engaging HTML and CSS course, began building personalized, static websites. Watching her explore her creativity while progressively improving captivated my interest immediately, which encouraged me to soon explore programming on my own.'));
    story.appendChild(chapterCreator(2, 'We All Start Somewhere', 'I commenced my programming journey with HTML and CSS, enabling me to build simple, static web pages. My love for front-end development grew; though, I found myself longing to create dynamic and interactive applications. Thus, I considered learning a variety of programming languages and finally settled on Python.'));
    story.appendChild(chapterCreator(3, 'Python', 'I began learning Python through available online resources, including W3Schools and Youtube (Yes, I entered and thankfully escaped Tutorial Hell). I learned numerous programming principles and practices, which enabled me to develop simple, entertaining tkinter applications as well as intuitive games in the console. My passion for programming steadily increased as my knowledge base expanded, and I later enrolled in a Computer Science course offered at my high school, which granted me the opportunity to further explore my curiosity and strengthen my Python capabilities.'));
    story.appendChild(chapterCreator(4, 'Java', 'By my junior and senior years of high school, I had already committed to technologically related degrees for post-secondary education, with a major focus on software development. Such, I enrolled in other Computer Science courses and learned about Java, the concepts of object-oriented programming, data structures, algorithms, and the importance of writing clean and efficient code. I showcased my competencies through a multitude of projects, which included developing a multiplayer platformer and single-player traffic game utilizing Java Swing.'));
    story.appendChild(chapterCreator(5, 'Rediscovering Web Development', 'With my newfound knowledge of programming, I decided to revisit web development. I learned about the basics of JavaScript through The Odin Project and progressively reignited my passion through creating miniature yet rewarding projects. '));
    story.appendChild(chapterCreator(6, 'The Journey Continues', 'I am now pursuing a bachelor’s degree in Computer Engineering at the University of Waterloo, with a prime focus on software development. I am continually improving my web development skills still, with goals of creating beautiful, dynamic websites using frameworks or technologies like React JS or MYSQL in the future. I am excited to continue learning and growing as a programmer, and I strive to make a positive impact in the world through technology.'));
    storySection.appendChild(storyTitle);
    storySection.appendChild(story);

    content.appendChild(storySection);

    // Skills
    const skillsSection = document.createElement('section');
    skillsSection.setAttribute('id', 'skills-container');
    skillsSection.classList.add('about');

    const skillsTitle = document.createElement('h2');
    skillsTitle.setAttribute('id', 'skills-title');
    skillsTitle.innerText = 'Skills';

    const skills = document.createElement('div');
    skills.setAttribute('id', 'skills');
    skills.appendChild(skillCardCreator('HTML', html5Logo, 'Standard markup language for creating web pages.'));
    skills.appendChild(skillCardCreator('CSS', css3Logo, 'Style sheet language used to style web pages.'));
    skills.appendChild(skillCardCreator('JavaScript', jsLogo, 'Programming language that enables interactive web pages.'));
    skills.appendChild(skillCardCreator('Python', pythonLogo, 'High-level programming language known for its readability and versatility.'));
    skills.appendChild(skillCardCreator('Java', javaLogo, 'High-level programming language that is class-based and object-oriented.'));
    skills.appendChild(skillCardCreator('C++', cppLogo, 'General-purpose programming language that is an extension of C.'));
    skills.appendChild(skillCardCreator('C#', csharpLogo, 'General-purpose programming language developed by Microsoft.'));

    skillsSection.appendChild(skillsTitle);
    skillsSection.appendChild(skills);

    content.appendChild(skillsSection);

    // Certificates
    const certificatesSection = document.createElement('section');
    certificatesSection.setAttribute('id', 'certificates-container');
    certificatesSection.classList.add('about');

    const certificatesTitle = document.createElement('h2');
    certificatesTitle.setAttribute('id', 'certificates-title');
    certificatesTitle.innerText = 'Certificates';

    const certificates = document.createElement('div');
    certificates.setAttribute('id', 'certificates');

    const certificate1 = document.createElement('button');
    const certificate1Img = document.createElement('img');
    certificate1Img.setAttribute('src', azureFundamentalsCert)
    const certificate1Text = document.createElement('p');
    certificate1Text.innerText = 'Azure Fundamentals';
    certificate1.appendChild(certificate1Img);
    certificate1.appendChild(certificate1Text);
    certificate1.addEventListener('click', () => {
        window.open('https://www.credly.com/badges/5d960f13-b520-4841-8920-d679d65f8c2b/public_url', '_blank');
    });

    const certificate2 = document.createElement('button');
    const certificate2Img = document.createElement('img');
    certificate2Img.setAttribute('src', azureAIFundamentalsCert)
    const certificate2Text = document.createElement('p');
    certificate2Text.innerText = 'Azure AI Fundamentals';
    certificate2.appendChild(certificate2Img);
    certificate2.appendChild(certificate2Text);
    certificate2.addEventListener('click', () => {
        window.open('https://www.credly.com/badges/ef9edba2-64ae-4e8f-8905-0ca703508079/public_url', '_blank');
    });

    certificates.appendChild(certificate1);
    certificates.appendChild(certificate2);

    certificatesSection.appendChild(certificatesTitle);
    certificatesSection.appendChild(certificates);

    content.appendChild(certificatesSection);

    // Interests and Hobbies
    const hobbiesSection = document.createElement('section');   

    hobbiesSection.setAttribute('id', 'hobbies-container');
    hobbiesSection.classList.add('about');

    const hobbiesTitle = document.createElement('h2');
    hobbiesTitle.setAttribute('id', 'hobbies-title');
    hobbiesTitle.innerText = 'Interests and Hobbies';

    const hobbies = document.createElement('div');
    hobbies.setAttribute('id', 'hobbies');
    hobbies.appendChild(hobbyCardCreator(cookingPic, 'Cooking/Baking', 'I love to cook and bake in my free time!'));
    hobbies.appendChild(hobbyCardCreator(basketballPic, 'Basketball', 'I enjoy playing basketball with friends and family!'));
    hobbies.appendChild(hobbyCardCreator(instrumentalMusicPic, 'Instrumental Music', 'I play the piano, cello, trombone, and guitar!'));

    hobbiesSection.appendChild(hobbiesTitle);
    hobbiesSection.appendChild(hobbies);

    content.appendChild(hobbiesSection);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('image-animation');
            }
        })
    });
    const viewbox = document.querySelectorAll('.hobby-card');
    console.log(viewbox);
    viewbox.forEach(img => {
        observer.observe(img);
    });
}