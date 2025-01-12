// 1. getAttribute() - Kisi bhi attribute ka value get karne ke liye
const value = element.getAttribute('id');

// 2. setAttribute() - Kisi bhi attribute ka value set karne ke liye
element.setAttribute('id', 'newId');

// 3. innerHTML - Element ke andar ka HTML content change ya access karne ke liye
element.innerHTML = '<p>New Content</p>';

// 4. innerText - Sirf visible text ko change ya access karne ke liye
element.innerText = 'New Text';

// 5. textContent - Saare text (visible + hidden) ko change ya access karne ke liye
element.textContent = 'All Text Here';

// 6. className - Element ka class name get/set karne ke liye
element.className = 'new-class';

// 7. id - Element ka ID get/set karne ke liye
element.id = 'uniqueId';

// 8. style - Inline styles apply ya update karne ke liye
element.style.color = 'blue';
element.style.backgroundColor = 'lightyellow';

// 9. value - Input box ya textarea ka value access/set karne ke liye
inputElement.value = 'New Input Value';

// 10. src - Image ya script ka source update karne ke liye
imageElement.src = 'new-image.png';

// 11. href - Anchor tag ka link update karne ke liye
anchorElement.href = 'https://example.com';

// 12. disabled - Kisi button ya input ko enable/disable karne ke liye
buttonElement.disabled = true; // Disable
buttonElement.disabled = false; // Enable

// 13. hidden - Kisi element ko hide/unhide karne ke liye
element.hidden = true;  // Hide
element.hidden = false; // Show

// 14. dataset - Custom data attributes (data-*) ko access karne ke liye
const dataValue = element.dataset.key; // For <div data-key="value"></div>

// 15. parentElement - Element ke parent ko access karne ke liye
const parent = element.parentElement;

// 16. children - Element ke saare child elements ko access karne ke liye
const children = element.children;

// 17. firstElementChild / lastElementChild - First/Last child ko access karne ke liye
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// 18. nextElementSibling / previousElementSibling - Sibling elements ke liye
const nextSibling = element.nextElementSibling;
const previousSibling = element.previousElementSibling;

// 19. removeAttribute() - Kisi attribute ko delete/remove karne ke liye
element.removeAttribute('id');

// 20. hasAttribute() - Check karne ke liye ki attribute exist karta hai ya nahi
const hasAttr = element.hasAttribute('class');
