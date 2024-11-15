window.onload = function() {
    // Splash screen logic with fade-out effect
    setTimeout(function() {
        document.getElementById('splash-screen').style.opacity = '0';
        document.getElementById('splash-screen').style.transition = 'opacity 2s ease-in-out';
    }, 5000); // Delay before starting the fade out

    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('main-content').style.opacity = '1';
        document.getElementById('main-content').style.transition = 'opacity 2s ease-in-out';

        // Show the ad images
        document.querySelector('.left-ad').style.display = 'block';
        document.querySelector('.right-ad').style.display = 'block';
    }, 10000); // Adjust the time to match your GIF duration plus fade-out time

    // Make the logo disappear on click
    document.getElementById('splash-screen').addEventListener('click', function() {
        document.getElementById('splash-screen').style.opacity = '0';
        document.getElementById('splash-screen').style.transition = 'opacity 2s ease-in-out';
        setTimeout(function() {
            document.getElementById('splash-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            document.getElementById('main-content').style.opacity = '1';
            document.getElementById('main-content').style.transition = 'opacity 2s ease-in-out';
            
            // Show the ad images
            document.querySelector('.left-ad').style.display = 'block';
            document.querySelector('.right-ad').style.display = 'block';
        }, 2000); // Adjust the time to match the fade-out duration
    });

    // Existing hover effect logic
    document.querySelectorAll('.category').forEach(category => {
        const image = category.querySelector('.main-image');
        const hoverSrc = image.getAttribute('data-hover');
        const hoverImage = document.createElement('img');
        hoverImage.src = hoverSrc;
        hoverImage.alt = "Hover Image";
        hoverImage.classList.add('hover-image');

        const parentContainer = image.parentNode;
        parentContainer.style.position = 'relative';

        hoverImage.style.position = 'absolute';
        hoverImage.style.top = '0';
        hoverImage.style.left = '0';
        hoverImage.style.width = '100%';
        hoverImage.style.height = '100%';
        hoverImage.style.opacity = '0';
        hoverImage.style.zIndex = '2';
        hoverImage.style.transition = 'opacity 0.8s ease-in-out'; // Consistent transition speed

        hoverImage.onload = function() {
            console.log(`Hover image loaded successfully: ${hoverImage.src}`);
            parentContainer.appendChild(hoverImage);
            console.log("Hover image appended to parent", hoverImage);
        };
        hoverImage.onerror = function() {
            console.error(`Failed to load hover image: ${hoverImage.src}`);
        };

        category.addEventListener('mouseenter', function() {
            console.log("Mouse entered the image area");
            image.style.opacity = '0';
            hoverImage.style.opacity = '1';
            hoverImage.style.visibility = 'visible';
            console.log("Hover Image should be visible now", hoverImage);
        });

        category.addEventListener('mouseleave', function() {
            console.log("Mouse left the image area");
            hoverImage.style.opacity = '0';
            setTimeout(() => {
                hoverImage.style.visibility = 'hidden';
                image.style.opacity = '1';
                console.log("Hover Image should be hidden now", hoverImage);
            }, 300); // Adjusted delay to match transition speed
        });
    });
};
