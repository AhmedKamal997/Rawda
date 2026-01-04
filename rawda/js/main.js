// Rawda Award — Standalone JS
// Consolidates language toggling, iPhone mode lock, font-size controls, and year rendering

(function(){
  // Font size controls (A+/A- with fsPlus/fsMinus ids)
  let fsScale = 1;
  function applyFs(){ document.body.style.fontSize = (16 * fsScale) + 'px'; }
  const plus = document.getElementById('fsPlus');
  const minus = document.getElementById('fsMinus');
  if (plus) plus.addEventListener('click', function(e){ e.preventDefault(); fsScale = Math.min(1.6, fsScale + 0.1); applyFs(); });
  if (minus) minus.addEventListener('click', function(e){ e.preventDefault(); fsScale = Math.max(0.85, fsScale - 0.1); applyFs(); });
})();

// Language toggle via text label (matches Drupal design)
function showAr(){
  document.documentElement.setAttribute('lang','ar');
  document.body.setAttribute('dir','rtl');
  var el;
  el = document.getElementById('hero-ar'); if (el) el.style.display='block';
  el = document.getElementById('hero-en'); if (el) el.style.display='none';
  el = document.getElementById('sheikha-note-ar'); if (el) el.style.display='block';
  el = document.getElementById('sheikha-note-en'); if (el) el.style.display='none';
  el = document.getElementById('levels-bar-ar'); if (el) el.style.display='inline-block';
  el = document.getElementById('levels-bar-en'); if (el) el.style.display='none';
  el = document.getElementById('targets-ar'); if (el) el.style.display='grid';
  el = document.getElementById('targets-en'); if (el) el.style.display='none';
  el = document.getElementById('about-title'); if (el) el.textContent='حول الجائزة';
  el = document.getElementById('about-text-ar'); if (el) el.style.display='block';
  el = document.getElementById('about-text-en'); if (el) el.style.display='none';
  el = document.getElementById('about-note-ar'); if (el) el.style.display='block';
  el = document.getElementById('about-note-en'); if (el) el.style.display='none';
  el = document.getElementById('sheikha-note-title'); if (el) el.textContent='نبذة عن الشيخة روضة:';
  el = document.getElementById('targets-title'); if (el) el.textContent='الفئات المستهدفة';
  el = document.getElementById('email-label'); if (el) el.textContent='البريد الإلكتروني';
  el = document.getElementById('phone-label'); if (el) el.textContent='الهاتف';
  // Update footer link aria labels (Arabic)
  var phoneLink = document.querySelector('a[href^="tel:"]'); if (phoneLink) phoneLink.setAttribute('aria-label','رقم الهاتف 16003');
  var emailLink = document.getElementById('email-value'); if (emailLink) emailLink.setAttribute('aria-label','البريد الإلكتروني Info@Rawdaaward.qa');
  el = document.getElementById('footer-title'); if (el) el.textContent='تواصل معنا';
  el = document.getElementById('footer-ministry'); if (el) el.textContent='وزارة التنمية الاجتماعية والأسرة';
  el = document.getElementById('privacy-link'); if (el) el.textContent='سياسة الخصوصية';
  el = document.getElementById('terms-link'); if (el) el.textContent='شروط الاستخدام';
  el = document.getElementById('cookie-link'); if (el) el.textContent='تفضيلات الكوكيز';
  var locLabel = document.getElementById('location-label'); if (locLabel) locLabel.textContent = 'الموقع';
  var locValue = document.getElementById('location-value'); if (locValue) { locValue.textContent = 'جائزة الروضة'; locValue.setAttribute('aria-label','جائزة الروضة'); }
  // Footer icons and Mada badge (Arabic)
  el = document.getElementById('phone-icon'); if (el) el.alt = 'الهاتف';
  el = document.getElementById('email-icon'); if (el) el.alt = 'البريد الإلكتروني';
  el = document.getElementById('location-icon'); if (el) el.alt = 'الموقع';
  el = document.getElementById('mada-badge-img'); if (el) el.alt = 'اعتماد مدى للنفاذ الرقمي';
  el = document.getElementById('mada-badge-label'); if (el) el.textContent = 'معتمد بواسطة مدى';
  // Show the other language so users can toggle
  el = document.getElementById('language-switcher'); if (el) el.textContent='English';
  // List wrapper direction and label
  var awardsList = document.getElementById('awards-list');
  if (awardsList) { awardsList.setAttribute('dir','rtl'); awardsList.setAttribute('aria-label','قائمة الجوائز'); }
  // Awards tables visibility
  el = document.getElementById('awards-ar'); if (el) el.style.display='table';
  el = document.getElementById('awards-en'); if (el) el.style.display='none';
  el = document.getElementById('awards-panel-en'); if (el) el.style.display='none';
  el = document.getElementById('awards-total-en'); if (el) el.style.display='none';
  // Footnotes
  el = document.getElementById('awards-footnote-ar'); if (el) el.style.display='block';
  el = document.getElementById('awards-footnote-en'); if (el) el.style.display='none';
  el = document.getElementById('awards-total-note-ar'); if (el) el.style.display='block';
  el = document.getElementById('awards-total-note-en'); if (el) el.style.display='none';
  // Footer logo
  el = document.getElementById('footer-logo'); if (el) el.src = 'themes/custom/msdf/images/logo/footer-logo-ar.svg';
}

function showEn(){
  document.documentElement.setAttribute('lang','en');
  document.body.setAttribute('dir','ltr');
  var el;
  el = document.getElementById('hero-ar'); if (el) el.style.display='none';
  el = document.getElementById('hero-en'); if (el) el.style.display='block';
  el = document.getElementById('sheikha-note-ar'); if (el) el.style.display='none';
  el = document.getElementById('sheikha-note-en'); if (el) el.style.display='block';
  el = document.getElementById('levels-bar-ar'); if (el) el.style.display='none';
  el = document.getElementById('levels-bar-en'); if (el) el.style.display='inline-block';
  el = document.getElementById('targets-ar'); if (el) el.style.display='none';
  el = document.getElementById('targets-en'); if (el) el.style.display='grid';
  el = document.getElementById('about-title'); if (el) el.textContent='About the Award';
  el = document.getElementById('about-text-ar'); if (el) el.style.display='none';
  el = document.getElementById('about-text-en'); if (el) el.style.display='block';
  el = document.getElementById('about-note-ar'); if (el) el.style.display='none';
  el = document.getElementById('about-note-en'); if (el) el.style.display='block';
  el = document.getElementById('sheikha-note-title'); if (el) el.textContent='About Sheikha Rawda:';
  el = document.getElementById('targets-title'); if (el) el.textContent='Award Categories';
  el = document.getElementById('email-label'); if (el) el.textContent='Email';
  el = document.getElementById('phone-label'); if (el) el.textContent='Phone';
  // Update footer link aria labels (English)
  var phoneLink = document.querySelector('a[href^="tel:"]'); if (phoneLink) phoneLink.setAttribute('aria-label','Phone number 16003');
  var emailLink = document.getElementById('email-value'); if (emailLink) emailLink.setAttribute('aria-label','Email Info@Rawdaaward.qa');
  el = document.getElementById('footer-title'); if (el) el.textContent='Contact Us';
  el = document.getElementById('footer-ministry'); if (el) el.textContent='Ministry of Social Development and Family';
  el = document.getElementById('privacy-link'); if (el) el.textContent='Privacy Policy';
  el = document.getElementById('terms-link'); if (el) el.textContent='Terms of Use';
  el = document.getElementById('cookie-link'); if (el) el.textContent='Cookie Preferences';
  var locLabel = document.getElementById('location-label'); if (locLabel) locLabel.textContent = 'Location';
  var locValue = document.getElementById('location-value'); if (locValue) { locValue.textContent = 'Doha, Qatar — Rawda Award'; locValue.setAttribute('aria-label','Location: Doha, Qatar — Rawda Award'); }
  // Footer icons and Mada badge (English)
  el = document.getElementById('phone-icon'); if (el) el.alt = 'Phone';
  el = document.getElementById('email-icon'); if (el) el.alt = 'Email';
  el = document.getElementById('location-icon'); if (el) el.alt = 'Location';
  el = document.getElementById('mada-badge-img'); if (el) el.alt = 'Mada Digital Accessibility Accreditation';
  el = document.getElementById('mada-badge-label'); if (el) el.textContent = 'Accredited by Mada';
  // Show the other language so users can toggle
  el = document.getElementById('language-switcher'); if (el) el.textContent='العربية';
  // List wrapper direction and label
  var awardsList = document.getElementById('awards-list');
  if (awardsList) { awardsList.setAttribute('dir','ltr'); awardsList.setAttribute('aria-label','Awards list'); }
  // Awards tables visibility
  el = document.getElementById('awards-ar'); if (el) el.style.display='none';
  el = document.getElementById('awards-en'); if (el) el.style.display='table';
  el = document.getElementById('awards-panel-en'); if (el) el.style.display='block';
  el = document.getElementById('awards-total-en'); if (el) el.style.display='block';
  // Footnotes
  el = document.getElementById('awards-footnote-ar'); if (el) el.style.display='none';
  el = document.getElementById('awards-footnote-en'); if (el) el.style.display='block';
  el = document.getElementById('awards-total-note-ar'); if (el) el.style.display='none';
  el = document.getElementById('awards-total-note-en'); if (el) el.style.display='block';
  // Footer logo
  el = document.getElementById('footer-logo'); if (el) el.src = 'themes/custom/msdf/images/logo/footer-logo.svg';
}

// Language switcher init and default
(function(){
  var langSwitcherEl = document.getElementById('language-switcher');
  if (langSwitcherEl) {
    langSwitcherEl.addEventListener('click', function(){
      if (document.documentElement.getAttribute('lang') === 'ar') showEn(); else showAr();
    });
  }
  // Initialize (default to English)
  showEn();
})();

// Year in footer
(function(){
  var ry = document.getElementById('rights-year');
  if (ry) ry.textContent = new Date().getFullYear();
})();

// iPhone mode lock script
(function(){
  var BODY = document.body;
  var HTML = document.documentElement;
  var mq = window.matchMedia('(max-width: 600px)');
  var params = new URLSearchParams(location.search);
  var locked = false;

  function enableIphoneMode(){
    BODY.classList.add('iphone-mode');
    HTML.classList.add('iphone-mode');
    locked = true;
  }
  function maybeToggle(){
    if (locked) return;
    if (mq.matches) {
      enableIphoneMode();
    } else {
      BODY.classList.remove('iphone-mode');
      HTML.classList.remove('iphone-mode');
    }
  }
  if (params.get('mode') === 'iphone') {
    enableIphoneMode();
  } else if (mq.matches) {
    enableIphoneMode();
  } else {
    maybeToggle();
  }
  window.addEventListener('resize', maybeToggle);
  // Optional manual unlock for debugging (not exposed in UI)
  window.unlockIphoneMode = function(){ locked = false; BODY.classList.remove('iphone-mode'); HTML.classList.remove('iphone-mode'); maybeToggle(); };
})();