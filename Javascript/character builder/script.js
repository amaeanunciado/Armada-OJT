document.querySelectorAll('.armorpiece').forEach(item => {
    item.addEventListener('click', function () {
        let part = this.getAttribute('data-part'); // Get the parts like helmet, armor, leggings, and boots
        let selectedImage = this.getAttribute('src'); // Get the selected image source
        
        // Set the selected armor piece
        document.getElementById(part).setAttribute('src', selectedImage);

        // Remove highlight from previously selected item
        document.querySelectorAll(`[data-part='${part}']`).forEach(el => el.classList.remove('selected'));

        // Highlight the current selected armor piece
        this.classList.add('selected');
    });
});
