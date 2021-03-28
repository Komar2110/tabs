'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader_item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabcontent_header');

    function hideTanContent () {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader_item_active')
        });
    }

    function showTabContent (i=0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.add('fade');
        tabs[i].classList.add('tabheader_item_active')
    }
    hideTanContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader_item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTanContent();
                    showTabContent(i);
                }
            });
        }
    });
});