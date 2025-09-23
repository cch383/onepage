const navbarHeader = document.querySelector('.header'); // Select your navbar
  if (navbarHeader) {
    const navbarHeight = navbarHeader.offsetHeight; // Gets height including padding and border
    console.log('NavbarHeader Height:', navbarHeight + 'px');

    // Apply this height as padding-top to the body
    document.body.style.paddingTop = navbarHeight + 'px';
  }
