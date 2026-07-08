
document.addEventListener('DOMContentLoaded', () => {
    // 1. SPA Navigation
    const tabs = document.querySelectorAll('.nav-item');
    const panes = document.querySelectorAll('.tab-pane');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = tab.getAttribute('data-target');
            if(targetId === 'logout') return; // Handled by CTA validation
            
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            let currentPane = document.querySelector('.tab-pane.active');
            if(currentPane && currentPane.id !== targetId) {
                currentPane.style.opacity = '0';
                currentPane.style.transform = 'translateY(15px) scale(0.98)';
                
                setTimeout(() => {
                    currentPane.classList.remove('active');
                    currentPane.style = '';
                    
                    const newPane = document.getElementById(targetId);
                    if(newPane) {
                        newPane.classList.add('active');
                        void newPane.offsetWidth; // force reflow
                        newPane.style.opacity = '1';
                        newPane.style.transform = 'translateY(0) scale(1)';
                    }
                }, 400);
            } else if (!currentPane) {
                const newPane = document.getElementById(targetId);
                if(newPane) newPane.classList.add('active');
            }

            // Mobile menu close
            const sidebar = document.getElementById('sidebar');
            if(window.innerWidth <= 992 && sidebar) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Mobile Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            document.getElementById('sidebar').classList.add('active');
        });
    }

    // 2. Strict CTA & Form Validation (Redirects to 404.html)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
            
            inputs.forEach(input => {
                const errorDiv = input.nextElementSibling;
                if(!input.value.trim()) {
                    isValid = false;
                    input.classList.add('is-invalid');
                    if(errorDiv && errorDiv.classList.contains('error-msg')) {
                        errorDiv.style.display = 'block';
                        errorDiv.textContent = 'This field is required';
                    }
                } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                    isValid = false;
                    input.classList.add('is-invalid');
                    if(errorDiv && errorDiv.classList.contains('error-msg')) {
                        errorDiv.style.display = 'block';
                        errorDiv.textContent = 'Invalid email address';
                    }
                } else {
                    input.classList.remove('is-invalid');
                    if(errorDiv && errorDiv.classList.contains('error-msg')) errorDiv.style.display = 'none';
                }
            });

            if(isValid) {
                window.location.href = '404.html';
            }
        });
    });

    // 3. CTA Buttons (Book Now, Delete, Approve, Export, etc.)
    const ctaButtons = document.querySelectorAll('.btn:not([type="submit"])');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Only redirect if it's an action button, not a tab switcher
            if(!btn.hasAttribute('data-target')) {
                e.preventDefault();
                window.location.href = '404.html';
            }
        });
    });
    
    // Auto-update Date
    const dateEl = document.getElementById('currentDate');
    if(dateEl) {
        dateEl.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
});
