        document.addEventListener('DOMContentLoaded', function () {
            var moneybagText = document.querySelector('.moneybag-text');
            var moneybagOffset = moneybagText.offsetTop - window.innerHeight + 100;

            function handleScroll() {
                if (window.pageYOffset > moneybagOffset) {
                    moneybagText.classList.add('fade-in');
                } else {
                    moneybagText.classList.remove('fade-in');
                }
            }

            window.addEventListener('scroll', handleScroll);
        });