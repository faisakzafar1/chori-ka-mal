document.addEventListener("DOMContentLoaded", () => {
    // Toggle Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Scroll-to-section functionality
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Login Button Interaction
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('Redirecting to login page (placeholder functionality).');
        });
    }

    // Subject selection logic
    function showSubjects(branch) {
        document.querySelectorAll('.subjects-container').forEach(container => {
            container.style.display = 'block';
        });

        const semesterContainer = document.getElementById(`${branch}-subjects`);
        if (semesterContainer) semesterContainer.style.display = 'block';
    }
    function showSubjectOptions(branch, subject) {
        const subjectNameEl = document.getElementById(`${branch}-subject-name`);
        if (subjectNameEl) {
            subjectNameEl.textContent = subject;
        }

        // Hide all buttons initially
        const subjectButtons = document.querySelectorAll(`#${branch}-subject-options button`);
        subjectButtons.forEach(button => {
            button.style.display = 'none';
        });
        // Display the button for the selected subject
        const subjectButton = document.querySelector(`#${branch}-subject-options button[data-subject="${subject}"]`);
        if (subjectButton) {
            subjectButton.style.display = 'inline-block';  // Show only the selected subject's button
        }
//gpt

    // Show both Notes and PYQs buttons for the selected subject
    const notesButton = document.querySelector(`#${branch}-subject-options button[data-subject="${subject}"][onclick*="openNotes"]`);
    const pyqsButton = document.querySelector(`#${branch}-subject-options button[data-subject="${subject}"][onclick*="openPYQs"]`);

    if (notesButton) {
        notesButton.style.display = 'inline-block'; // Show the Notes button
    }
    if (pyqsButton) {
        pyqsButton.style.display = 'inline-block'; // Show the PYQs button
    }
    //gpt
        document.querySelectorAll('.subjects-container').forEach(container => {
            container.style.display = 'none';
        });

        const optionsContainer = document.getElementById(`${branch}-subject-options`);
        if (optionsContainer) {
            optionsContainer.style.display = 'block';
        }
    }

    function openNotes(branch, subject) {
        let notesLink = '';

        // CSE branch notes links
        if (branch === 'cse') {
            if (subject === 'Basic Electrical') {
                notesLink = 'https://drive.google.com/file/d/1KTOHy10DkEBfZ_t15sIoMFPrg-mZgwG4/view';
            } else if (subject === 'Physics') {
                notesLink = 'https://drive.google.com/file/d/1KbHYARKl-1781wYNSruG4YgQElkUHO57/view';
            } else if (subject === 'Mechanics') {
                notesLink = 'https://drive.google.com/file/d/1KkYDTt3c4IQ9wTYd4hibxT9OCMxC5MG6/view';
            } else if (subject === 'Mathematics') {
                notesLink = '#'; // No link available for Mathematics
            }
            else if (subject === 'AIML & Fashion Design') {
                notesLink = '#';
            }
            else if (subject === 'EVS') {
                notesLink = '#';
            }
        }

        // AIML branch notes links
        else if (branch === 'aiml') {
            if (subject === 'Design Thinking') {
                notesLink = '#'; // No link available for Design Thinking
            } else if (subject === 'Physics') {
                notesLink = 'https://drive.google.com/file/d/1KbHYARKl-1781wYNSruG4YgQElkUHO57/view';
            }
            else if (subject === 'Environmental Science') {
                notesLink = '#';
            }
            else if (subject === 'Electrical') {
                notesLink = 'https://drive.google.com/file/d/1KTOHy10DkEBfZ_t15sIoMFPrg-mZgwG4/view';
            }
            else if (subject === 'Mechanics') {
                notesLink = 'https://drive.google.com/file/d/1KkYDTt3c4IQ9wTYd4hibxT9OCMxC5MG6/view';
            }
            else if (subject === 'Mathematics') {
                notesLink = '#';
            }
        }

        // AID branch notes links
        else if (branch === 'aids') {
            if (subject === 'C Programming') {
                notesLink = 'https://drive.google.com/file/d/1MMaslnj0_BRurVl_-ALULOI3MvcVNmB4/view?usp=drivesdk';
            } else if (subject === 'Chemistry') {
                notesLink = 'https://drive.google.com/file/d/1MFj1WPVV8fOU2EiifbfeqE-hEY068qEF/view?usp=drivesdk';
            } else if (subject === 'Professional Communication') {
                notesLink = '#';
            } else if (subject === 'Electronics') {
                notesLink = '#';
            } else if (subject === 'Manufacturing') {
                notesLink = 'https://drive.google.com/file/d/1N78_A6EsCzdD0a2uzmHwvQVcSRF-PC_3/view';
            } else if (subject === 'Mathematics') {
                notesLink = '#';
            }
        }

        if (notesLink) {
            window.location.href = notesLink;
        } else {
            alert('No notes available for this subject.');
        }
    }

    // Function to open PYQs link based on selected branch and subject
    function openPYQs(branch, subject) {
        let pyqsLink = '';  // Initialize variable to store the PYQs link

        // CSE branch PYQs links
        if (branch === 'cse') {
            if (subject === 'Basic Electrical') {
                pyqsLink = 'https://drive.google.com/file/d/1LPz-pz4WkRuOjgKzdzM5gqE2xq2AvhQz/view';
            } else if (subject === 'Physics') {
                pyqsLink = 'https://drive.google.com/file/d/1LwIeOqMDUG6qgT1CAkWG0_2nX6lTDtTX/view';
            } else if (subject === 'Mechanics') {
                pyqsLink = 'https://drive.google.com/file/d/1M2svlCbNu1se15RbtuoaGEeLb_ECafk7/view';
            } else if (subject === 'Mathematics') {
                pyqsLink = 'https://drive.google.com/file/d/1Lz3u3YvOQE06nIMfm27ZW0gr9GMqGfSm/view';
            } else if (subject === 'AIML & Fashion Design') {
                pyqsLink = 'https://drive.google.com/file/d/1M2TKXZhYqFtIESl-EivoFDTTkXCEAqb7/view';
            } else if (subject === 'EVS') {
                pyqsLink = '#';  // No link for EVS
            }
        }

        // AIML branch PYQs links
        else if (branch === 'aiml') {
            if (subject === 'Mechanics') {
                pyqsLink = 'https://drive.google.com/file/d/1M2svlCbNu1se15RbtuoaGEeLb_ECafk7/view';
            } else if (subject === 'Electrical') {
                pyqsLink = 'https://drive.google.com/file/d/1LPz-pz4WkRuOjgKzdzM5gqE2xq2AvhQz/view';
            } else if (subject === 'Design Thinking') {
                pyqsLink = '#';  // No link for Design Thinking
            } else if (subject === 'Mathematics') {
                pyqsLink = 'https://drive.google.com/file/d/1Lz3u3YvOQE06nIMfm27ZW0gr9GMqGfSm/view';
            } else if (subject === 'Physics') {
                pyqsLink = 'https://drive.google.com/file/d/1LwIeOqMDUG6qgT1CAkWG0_2nX6lTDtTX/view';
            } else if (subject === 'Environmental Science') {
                pyqsLink = '#';  // No link for Environmental Science
            }
        }

        // AID branch PYQs links
        else if (branch === 'aids') {
            if (subject === 'Chemistry') {
                pyqsLink = 'https://drive.google.com/file/d/1MOpQCoI30KybSl5gGf1P4VekNmVlYJOK/view';
            } else if (subject === 'C Programming') {
                pyqsLink = 'https://drive.google.com/file/d/1MRTKIxcO3i6hYlifyxUsxX2Uv35Qjuvj/view';
            } else if (subject === 'Manufacturing') {
                pyqsLink = 'https://drive.google.com/file/d/1MUOaC7Mto94WwoHKe7tLf3iE8MEdtDGO/view';
            } else if (subject === 'Mathematics') {
                pyqsLink = 'https://drive.google.com/file/d/1Lz3u3YvOQE06nIMfm27ZW0gr9GMqGfSm/view';
            } else if (subject === 'Electronics') {
                pyqsLink = '#';  // No link for Electronics
            } else if (subject === 'Professional Communication') {
                pyqsLink = 'https://drive.google.com/file/d/1MWI66g_3hF22GWJFzlq8kz0YUsDyprSm/view';
            }
        }

        // Check if the PYQs link exists for the selected subject
        if (pyqsLink && pyqsLink !== '#') {
            // Open the PYQs link in a new tab
            window.open(pyqsLink, '_blank');
        } else {
            // Alert if no PYQs link is available for the selected subject
            alert('No PYQs available for this subject.');
        }
    }

    window.showSubjects = showSubjects;
    window.showSubjectOptions = showSubjectOptions;
    window.openNotes = openNotes;
    window.openPYQs = openPYQs;

});