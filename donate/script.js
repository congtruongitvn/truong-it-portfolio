// ============================================================
// SePay Payment Gateway — Configuration
// ============================================================
const SEPAY_CONFIG = {
    env: 'production',
    merchant_id: 'SP-LIVE-NC3A9466',
    checkout_url: {
        sandbox: 'https://sandbox.pay.sepay.vn/v1/init',
        production: 'https://pay.sepay.vn/v1/init'
    },
    success_url: 'https://nct88.github.io/portfolio/donate/?status=success',
    error_url: 'https://nct88.github.io/portfolio/donate/?status=error',
    cancel_url: 'https://nct88.github.io/portfolio/donate/?status=cancel'
};

// ============================================================
// Encrypted Secret Key (XOR cipher)
// ============================================================
const _a = [39,2,6,4,49,11,32,34,87,79,75,76,29,36,3,88,63,22,69,36,22,7,38,60,24,67,20,127,7,6,86,38,85,61,12,51,66,59,8,80,24,98];
const _k1 = 'Truong';
const _k2 = 'IT2026';
const _k3 = 'SePay';
function _d() {
    const k = _k1 + _k2 + _k3;
    return _a.map((c, i) => String.fromCharCode(c ^ k.charCodeAt(i % k.length))).join('');
}

// ============================================================
// i18n — Translations
// ============================================================
const TRANSLATIONS = {
    vi: {
        page_title: 'Ủng hộ truong.it',
        nav_back: 'Trang chủ',
        title: 'Ủng hộ <span>truong.it</span>',
        subtitle: 'Mỗi đóng góp đều giúp tôi tiếp tục tạo ra những sản phẩm giá trị cho cộng đồng.',
        step1_label: 'Chọn số tiền ủng hộ',
        step2_label: 'Lời nhắn <em data-i18n="optional">(không bắt buộc)</em>',
        optional: '(không bắt buộc)',
        step3_label: 'Thanh toán qua SePay',
        custom_amount_placeholder: 'Nhập số tiền khác...',
        amount_label: 'Số tiền:',
        message_placeholder: 'Gửi lời nhắn đến Trường...',
        method_transfer: 'Chuyển khoản',
        method_card: 'Thẻ quốc tế',
        donate_btn: 'Ủng hộ ngay',
        processing: 'Đang xử lý...',
        security_note: 'Thanh toán bảo mật qua <strong>SePay</strong> — Chứng nhận ISO 27001',
        toast_success: 'Cảm ơn bạn đã ủng hộ! Giao dịch thành công.',
        toast_error: 'Giao dịch thất bại. Vui lòng thử lại.',
        toast_cancel: 'Bạn đã hủy giao dịch.',
        toast_min_amount: 'Vui lòng chọn hoặc nhập số tiền tối thiểu',
        toast_generic_error: 'Có lỗi xảy ra, vui lòng thử lại'
    },
    en: {
        page_title: 'Support truong.it',
        nav_back: 'Home',
        title: 'Support <span>truong.it</span>',
        subtitle: 'Every contribution helps me continue creating valuable products for the community.',
        step1_label: 'Choose an amount',
        step2_label: 'Message <em data-i18n="optional">(optional)</em>',
        optional: '(optional)',
        step3_label: 'Pay via SePay',
        custom_amount_placeholder: 'Enter custom amount...',
        amount_label: 'Amount:',
        message_placeholder: 'Send a message to Trường...',
        method_transfer: 'Bank Transfer',
        method_card: 'Int\'l Card',
        donate_btn: 'Donate now',
        processing: 'Processing...',
        security_note: 'Secured by <strong>SePay</strong> — ISO 27001 Certified',
        toast_success: 'Thank you for your support! Transaction successful.',
        toast_error: 'Transaction failed. Please try again.',
        toast_cancel: 'Transaction cancelled.',
        toast_min_amount: 'Please select or enter minimum amount',
        toast_generic_error: 'An error occurred, please try again'
    }
};

// ============================================================
// Currency Presets
// ============================================================
const CURRENCY_PRESETS = {
    VND: {
        amounts: [10000, 20000, 50000, 100000, 200000, 500000],
        labels: ['10K', '20K', '50K', '100K', '200K', '500K'],
        default: 50000,
        min: 1000,
        step: 1000,
        format: (n) => new Intl.NumberFormat('vi-VN').format(n) + '₫'
    },
    USD: {
        amounts: [1, 2, 5, 10, 20, 50],
        labels: ['$1', '$2', '$5', '$10', '$20', '$50'],
        default: 5,
        min: 1,
        step: 1,
        format: (n) => '$' + new Intl.NumberFormat('en-US', { minimumFractionDigits: n % 1 ? 2 : 0 }).format(n)
    }
};

// ============================================================
// State
// ============================================================
let selectedAmount = 50000;
let currentLang = 'vi';
let currentCurrency = 'VND';

// ============================================================
// Theme
// ============================================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function getPreferredTheme() {
    const saved = localStorage.getItem('donate-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('donate-theme', theme);
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// ============================================================
// Language Toggle
// ============================================================
const langToggle = document.getElementById('lang-toggle');

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    document.documentElement.setAttribute('data-lang', currentLang);
    document.documentElement.setAttribute('lang', currentLang);
    localStorage.setItem('donate-lang', currentLang);

    // Update pill UI
    langToggle.querySelectorAll('.pill-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.val === currentLang);
    });

    applyTranslations();
    updateAmountDisplay();
});

function applyTranslations() {
    const t = TRANSLATIONS[currentLang];
    document.title = t.page_title;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });
}

// ============================================================
// Currency Toggle
// ============================================================
const currencyToggle = document.getElementById('currency-toggle');

currencyToggle.addEventListener('click', () => {
    currentCurrency = currentCurrency === 'VND' ? 'USD' : 'VND';
    document.documentElement.setAttribute('data-currency', currentCurrency);
    localStorage.setItem('donate-currency', currentCurrency);

    // Update pill UI
    currencyToggle.querySelectorAll('.pill-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.val === currentCurrency);
    });

    rebuildAmountGrid();
});

// ============================================================
// Amount Grid
// ============================================================
function rebuildAmountGrid() {
    const preset = CURRENCY_PRESETS[currentCurrency];
    const grid = document.getElementById('amount-grid');
    const customInput = document.getElementById('custom-amount');

    grid.innerHTML = '';
    preset.amounts.forEach((amount, i) => {
        const btn = document.createElement('button');
        btn.className = 'amount-btn';
        btn.dataset.amount = amount;
        btn.textContent = preset.labels[i];
        if (amount === preset.default) btn.classList.add('active');
        btn.addEventListener('click', () => {
            grid.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedAmount = amount;
            customInput.value = '';
            updateAmountDisplay();
        });
        grid.appendChild(btn);
    });

    selectedAmount = preset.default;
    customInput.min = preset.min;
    customInput.step = preset.step;
    customInput.value = '';
    updateAmountDisplay();
}

// ============================================================
// Custom Amount Input
// ============================================================
const customAmountInput = document.getElementById('custom-amount');

customAmountInput.addEventListener('input', () => {
    const preset = CURRENCY_PRESETS[currentCurrency];
    const value = parseFloat(customAmountInput.value);
    if (value && value >= preset.min) {
        document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
        selectedAmount = value;
        updateAmountDisplay();
    } else if (customAmountInput.value === '') {
        const activeBtn = document.querySelector('.amount-btn.active');
        if (activeBtn) {
            selectedAmount = parseFloat(activeBtn.dataset.amount);
        } else {
            selectedAmount = preset.default;
        }
        updateAmountDisplay();
    }
});

customAmountInput.addEventListener('focus', () => {
    document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
});

// ============================================================
// Amount Display
// ============================================================
const amountDisplay = document.getElementById('amount-display');

function updateAmountDisplay() {
    const preset = CURRENCY_PRESETS[currentCurrency];
    amountDisplay.textContent = preset.format(selectedAmount);
}

// ============================================================
// HMAC-SHA256 Signature
// ============================================================
async function generateSignature(fields) {
    const signableFields = [
        'merchant', 'env', 'operation', 'payment_method',
        'order_amount', 'currency', 'order_invoice_number',
        'order_description', 'customer_id',
        'agreement_id', 'agreement_name', 'agreement_type',
        'agreement_payment_frequency', 'agreement_amount_per_payment',
        'success_url', 'error_url', 'cancel_url', 'order_id'
    ];

    const parts = [];
    for (const key of signableFields) {
        if (fields[key] !== undefined && fields[key] !== null) {
            parts.push(`${key}=${fields[key] ?? ''}`);
        }
    }

    const dataToSign = parts.join(',');
    const secretKey = _d();
    const encoder = new TextEncoder();

    const cryptoKey = await crypto.subtle.importKey(
        'raw', encoder.encode(secretKey),
        { name: 'HMAC', hash: 'SHA-256' },
        false, ['sign']
    );

    const sigBuffer = await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(dataToSign));
    const sigArray = new Uint8Array(sigBuffer);
    let binary = '';
    for (let i = 0; i < sigArray.length; i++) binary += String.fromCharCode(sigArray[i]);
    return btoa(binary);
}

// ============================================================
// Invoice Number
// ============================================================
function generateInvoiceNumber() {
    return `DONATE-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
}

// ============================================================
// Submit Donation
// ============================================================
async function submitDonation() {
    const t = TRANSLATIONS[currentLang];
    const preset = CURRENCY_PRESETS[currentCurrency];

    if (!selectedAmount || selectedAmount < preset.min) {
        const minText = preset.format(preset.min);
        showToast(`${t.toast_min_amount} ${minText}`, 'error');
        customAmountInput.focus();
        return;
    }

    const donateBtn = document.getElementById('donate-btn');
    donateBtn.classList.add('loading');
    donateBtn.disabled = true;

    try {
        const message = document.getElementById('donor-message').value.trim();
        const description = message
            ? `Donate truong.it - ${message}`
            : 'Donate ung ho truong.it';

        const fields = {
            merchant: SEPAY_CONFIG.merchant_id,
            operation: 'PURCHASE',
            order_invoice_number: generateInvoiceNumber(),
            order_amount: selectedAmount,
            currency: currentCurrency,
            order_description: description,
            success_url: SEPAY_CONFIG.success_url,
            error_url: SEPAY_CONFIG.error_url,
            cancel_url: SEPAY_CONFIG.cancel_url
        };

        const signature = await generateSignature(fields);
        const form = document.getElementById('sepay-form');
        form.action = SEPAY_CONFIG.checkout_url[SEPAY_CONFIG.env];
        form.innerHTML = '';

        for (const [key, value] of Object.entries({ ...fields, signature })) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            form.appendChild(input);
        }

        form.submit();
    } catch (error) {
        console.error('Payment error:', error);
        showToast(t.toast_generic_error, 'error');
        donateBtn.classList.remove('loading');
        donateBtn.disabled = false;
    }
}

// ============================================================
// Toast
// ============================================================
function showToast(message, type = 'info') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'error' ? 'fa-circle-exclamation'
        : type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
    toast.innerHTML = `<i class="fas ${icon}"></i><span>${message}</span>`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 250);
    }, 4000);
}

// ============================================================
// Callback Status
// ============================================================
function handleCallbackStatus() {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');
    const t = TRANSLATIONS[currentLang];

    if (status === 'success') showToast(t.toast_success, 'success');
    else if (status === 'error') showToast(t.toast_error, 'error');
    else if (status === 'cancel') showToast(t.toast_cancel, 'error');

    if (status) window.history.replaceState({}, '', window.location.pathname);
}

// ============================================================
// Init
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    // Restore preferences
    const savedLang = localStorage.getItem('donate-lang');
    if (savedLang && savedLang !== currentLang) {
        currentLang = savedLang;
        document.documentElement.setAttribute('data-lang', currentLang);
        document.documentElement.setAttribute('lang', currentLang);
        langToggle.querySelectorAll('.pill-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.val === currentLang);
        });
    }

    const savedCurrency = localStorage.getItem('donate-currency');
    if (savedCurrency && savedCurrency !== currentCurrency) {
        currentCurrency = savedCurrency;
        document.documentElement.setAttribute('data-currency', currentCurrency);
        currencyToggle.querySelectorAll('.pill-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.val === currentCurrency);
        });
    }

    setTheme(getPreferredTheme());
    applyTranslations();
    rebuildAmountGrid();
    handleCallbackStatus();
});
