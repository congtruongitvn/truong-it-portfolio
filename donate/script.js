// ============================================================
// SePay Custom Checkout — Configuration
// ============================================================
const BANK_CONFIG = {
    bank: 'Sacombank',
    account: '071283663333',
    name: 'NGUYEN CONG TRUONG',
    display_name: 'Sacombank',
    bank_code: 'stb',
    bank_bin: '970403'
};

// ============================================================
// Cloudflare Worker URL
// ============================================================
const WORKER_URL = 'https://donate-api.truong-it.workers.dev';

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
        toast_generic_error: 'Có lỗi xảy ra, vui lòng thử lại',
        donors_title: 'Những người ủng hộ',
        donors_subtitle: 'Cảm ơn tất cả những tấm lòng hảo tâm!',
        stat_total: 'Tổng ủng hộ',
        stat_donors: 'Lượt ủng hộ',
        donors_empty: 'Hãy là người đầu tiên ủng hộ!',
        donor_anonymous: 'Nhà hảo tâm',
        time_just_now: 'Vừa xong',
        time_minutes_ago: 'phút trước',
        time_hours_ago: 'giờ trước',
        time_days_ago: 'ngày trước',
        checkout_title: 'Quét mã để thanh toán',
        bank_name: 'Ngân hàng',
        bank_account: 'Số tài khoản',
        bank_content: 'Nội dung CK',
        waiting_payment: 'Đang chờ thanh toán...',
        payment_success: 'Thanh toán thành công!',
        payment_thanks: 'Cảm ơn bạn đã ủng hộ truong.it',
        close_btn: 'Đóng',
        copied: 'Đã sao chép!',
        expired: 'Hết thời gian thanh toán',
        download_qr: 'Tải QR',
        copy_stk: 'Chép STK',
        open_bank_app: 'Mở App CK',
        select_bank: 'Chọn ngân hàng',
        search_bank: 'Tìm ngân hàng...',
        bank_note: 'Chọn ngân hàng bạn đang dùng để mở app chuyển khoản nhanh',
        stk_copied: 'Đã chép số tài khoản!',
        qr_downloaded: 'Đã tải mã QR!',
        bank_not_found: 'Không tìm thấy ngân hàng',
        bank_app_opened: 'Đã mở app ngân hàng',
        bank_app_scan_hint: 'Đã sao chép thông tin CK. Mở app và dán hoặc quét mã QR trên màn hình',
        bank_copy_info: 'Đã sao chép STK. Mở app \u2192 Chuyển khoản \u2192 Dán số TK',
        autofill_yes: 'Tự điền',
        autofill_no: 'Thử mở'
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
        toast_generic_error: 'An error occurred, please try again',
        donors_title: 'Supporters',
        donors_subtitle: 'Thank you to all our generous supporters!',
        stat_total: 'Total raised',
        stat_donors: 'Donations',
        donors_empty: 'Be the first to donate!',
        donor_anonymous: 'Supporter',
        time_just_now: 'Just now',
        time_minutes_ago: 'min ago',
        time_hours_ago: 'hr ago',
        time_days_ago: 'days ago',
        checkout_title: 'Scan to pay',
        bank_name: 'Bank',
        bank_account: 'Account No.',
        bank_content: 'Transfer note',
        waiting_payment: 'Waiting for payment...',
        payment_success: 'Payment successful!',
        payment_thanks: 'Thank you for supporting truong.it',
        close_btn: 'Close',
        copied: 'Copied!',
        expired: 'Payment expired',
        download_qr: 'Save QR',
        copy_stk: 'Copy Acc.',
        open_bank_app: 'Open App',
        select_bank: 'Select bank',
        search_bank: 'Search bank...',
        bank_note: 'Select your bank to open the app for quick transfer',
        stk_copied: 'Account number copied!',
        qr_downloaded: 'QR code downloaded!',
        bank_not_found: 'No bank found',
        bank_app_opened: 'Bank app opened',
        bank_app_scan_hint: 'Transfer info copied. Open app and paste or scan QR on screen',
        bank_copy_info: 'Account copied. Open app \u2192 Transfer \u2192 Paste account',
        autofill_yes: 'Autofill',
        autofill_no: 'Try open'
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
let checkoutPollTimer = null;
let checkoutCountdownTimer = null;
let currentOrderCode = null;
let appHWID = null; // HWID từ app desktop (nếu có)

// Đọc HWID từ URL parameter (được truyền từ ZaloMulti.ps1)
(function extractHWID() {
    const params = new URLSearchParams(window.location.search);
    appHWID = params.get('hwid') || null;
})();

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
// Generate Payment Code (local)
// ============================================================
function generatePaymentCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'DN';
    for (let i = 0; i < 6; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}

// ============================================================
// Submit Donation — Custom Checkout Flow
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
        const code = generatePaymentCode();
        const amount = parseInt(selectedAmount);

        // Mở checkout modal trực tiếp (không cần gọi server)
        openCheckout({ code, amount });
    } catch (error) {
        console.error('Payment error:', error);
        showToast(t.toast_generic_error, 'error');
    } finally {
        donateBtn.classList.remove('loading');
        donateBtn.disabled = false;
    }
}

// ============================================================
// Checkout Modal
// ============================================================
function openCheckout(order) {
    currentOrderCode = order.code;
    const preset = CURRENCY_PRESETS[currentCurrency];

    // QR Code via SePay QR API
    const qrUrl = `https://qr.sepay.vn/img?acc=${BANK_CONFIG.account}&bank=${BANK_CONFIG.bank}&amount=${order.amount}&des=${encodeURIComponent(order.code)}`;
    const qrImg = document.getElementById('checkout-qr-img');
    const qrLoading = document.getElementById('qr-loading');

    qrLoading.classList.remove('hidden');
    qrImg.onload = () => qrLoading.classList.add('hidden');
    qrImg.onerror = () => qrLoading.classList.add('hidden');
    qrImg.src = qrUrl;

    // Amount display
    document.getElementById('checkout-amount-display').textContent = preset.format(order.amount);

    // Bank info
    document.getElementById('bank-name').textContent = BANK_CONFIG.display_name;
    document.querySelector('#bank-account .copy-text').textContent = BANK_CONFIG.account;
    document.querySelector('#bank-content .copy-text').textContent = order.code;

    // Show pending, hide success
    document.getElementById('checkout-pending').style.display = '';
    document.getElementById('checkout-success').style.display = 'none';

    // Open overlay
    const overlay = document.getElementById('checkout-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Start countdown (15 min)
    startCountdown(15 * 60);

    // Start polling — dùng SePay API qua Worker
    startPolling(order.code, order.amount);
}

function closeCheckout() {
    const overlay = document.getElementById('checkout-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    currentOrderCode = null;
    stopPolling();
    stopCountdown();
}

// ============================================================
// Countdown Timer
// ============================================================
let countdownRemaining = 0;

function startCountdown(seconds) {
    stopCountdown();
    countdownRemaining = seconds;
    updateTimerDisplay();

    checkoutCountdownTimer = setInterval(() => {
        countdownRemaining--;
        updateTimerDisplay();

        if (countdownRemaining <= 0) {
            stopCountdown();
            stopPolling();
            const t = TRANSLATIONS[currentLang];
            showToast(t.expired, 'error');
            closeCheckout();
        }
    }, 1000);
}

function stopCountdown() {
    if (checkoutCountdownTimer) {
        clearInterval(checkoutCountdownTimer);
        checkoutCountdownTimer = null;
    }
}

function updateTimerDisplay() {
    const min = Math.floor(countdownRemaining / 60);
    const sec = countdownRemaining % 60;
    const text = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    document.getElementById('timer-text').textContent = text;

    const timerEl = document.getElementById('checkout-timer');
    if (countdownRemaining <= 120) {
        timerEl.classList.add('urgent');
    } else {
        timerEl.classList.remove('urgent');
    }
}

// ============================================================
// Payment Polling
// ============================================================
function startPolling(code, amount) {
    stopPolling();
    checkoutPollTimer = setInterval(async () => {
        try {
            const res = await fetch(`${WORKER_URL}/check?code=${encodeURIComponent(code)}&amount=${amount}`);
            const data = await res.json();

            if (data.status === 'paid') {
                stopPolling();
                stopCountdown();
                showPaymentSuccess();
            }
        } catch (err) {
            console.warn('Poll error:', err);
        }
    }, 5000); // Poll every 5 seconds
}

function stopPolling() {
    if (checkoutPollTimer) {
        clearInterval(checkoutPollTimer);
        checkoutPollTimer = null;
    }
}

function showPaymentSuccess() {
    const preset = CURRENCY_PRESETS[currentCurrency];
    document.getElementById('checkout-pending').style.display = 'none';
    document.getElementById('checkout-success').style.display = '';
    document.getElementById('success-amount').textContent = preset.format(selectedAmount);

    // Đăng ký HWID đã donate thành công (nếu có HWID từ app)
    if (appHWID) {
        registerDonatedHWID(appHWID, selectedAmount);
    }

    // Refresh donor list after delay
    setTimeout(() => loadDonors(), 2000);
}

// ============================================================
// HWID Registration — Gọi Worker đăng ký HWID sau khi donate
// ============================================================
async function registerDonatedHWID(hwid, amount) {
    try {
        // 1. Đăng ký lên Cloudflare Worker (để đồng bộ hệ thống cũ)
        const res = await fetch(`${WORKER_URL}/hwid/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                hwid: hwid,
                amount: parseInt(amount) || 0,
                code: currentOrderCode || ''
            })
        });
        const data = await res.json();
        if (data.success) {
            console.log('HWID registered to Cloudflare:', hwid);
        }

        // 2. Đăng ký TRỰC TIẾP lên VPS Node.js (Meta Business Pro)
        const vpsRes = await fetch(`https://api.truong.me/donate_add?hwid=${encodeURIComponent(hwid)}`);
        const vpsData = await vpsRes.json();
        if (vpsData.success) {
            console.log('HWID registered to VPS:', hwid);
        }
    } catch (err) {
        console.warn('Failed to register HWID:', err);
    }
}

// ============================================================
// HWID Donate Status Check — Kiểm tra và ẩn form nếu đã donate
// ============================================================
async function checkHwidDonateStatus(hwid) {
    try {
        const res = await fetch(`${WORKER_URL}/hwid/check?id=${encodeURIComponent(hwid)}`);
        const data = await res.json();

        if (data.donated) {
            // Đã donate → hiện thông báo cảm ơn, ẩn form
            showDonatedOverlay();
        }
    } catch (err) {
        // Nếu lỗi API → vẫn hiện form donate bình thường
        console.warn('HWID check failed:', err);
    }
}

function showDonatedOverlay() {
    const t = TRANSLATIONS[currentLang];
    const isVi = currentLang === 'vi';

    // Tạo overlay cảm ơn full-screen
    const overlay = document.createElement('div');
    overlay.id = 'donated-overlay';
    overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 99999;
        display: flex; align-items: center; justify-content: center;
        background: var(--bg-primary, #0f0f23);
        flex-direction: column; gap: 1.5rem;
        animation: fadeIn 0.4s ease;
    `;

    overlay.innerHTML = `
        <div style="text-align:center; padding: 2rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">💖</div>
            <h2 style="color: var(--text-primary, #fff); font-size: 1.8rem; margin-bottom: 0.5rem;">
                ${isVi ? 'Cảm ơn bạn đã ủng hộ!' : 'Thank you for your support!'}
            </h2>
            <p style="color: var(--text-secondary, #aaa); font-size: 1.1rem; max-width: 400px; margin: 0 auto 1.5rem;">
                ${isVi
                    ? 'Thiết bị này đã được ghi nhận. Bạn sẽ không thấy trang donate khi mở app nữa.'
                    : 'This device has been registered. You won\'t see the donate page when opening the app anymore.'}
            </p>
            <p style="color: var(--text-secondary, #888); font-size: 0.85rem;">
                ${isVi ? 'Trang sẽ tự đóng sau 5 giây...' : 'This page will close in 5 seconds...'}
            </p>
        </div>
    `;

    document.body.appendChild(overlay);

    // Tự đóng tab sau 5 giây (nếu được mở từ app)
    setTimeout(() => {
        try { window.close(); } catch(e) {}
    }, 5000);
}

// ============================================================
// Copy to Clipboard
// ============================================================
function copyText(el) {
    const text = el.querySelector('.copy-text')?.textContent || el.textContent;
    navigator.clipboard.writeText(text.trim()).then(() => {
        const t = TRANSLATIONS[currentLang];
        showToast(t.copied, 'success');
    });
}

// ============================================================
// Download QR Code
// ============================================================
function downloadQR() {
    const t = TRANSLATIONS[currentLang];
    const qrImg = document.getElementById('checkout-qr-img');
    if (!qrImg || !qrImg.src) return;

    // Create a temporary canvas to draw the QR image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Use a new image with crossOrigin to avoid tainted canvas
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);

        // Convert to blob and download
        canvas.toBlob((blob) => {
            if (!blob) {
                // Fallback: open image in new tab
                window.open(qrImg.src, '_blank');
                return;
            }
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `QR_Donate_${currentOrderCode || 'truong-it'}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            showToast(t.qr_downloaded, 'success');
        }, 'image/png');
    };
    img.onerror = () => {
        // Fallback: open image in new tab if CORS blocked
        window.open(qrImg.src, '_blank');
    };
    img.src = qrImg.src;
}

// ============================================================
// Copy STK (Account Number)
// ============================================================
function copySTK() {
    const t = TRANSLATIONS[currentLang];
    navigator.clipboard.writeText(BANK_CONFIG.account).then(() => {
        showToast(t.stk_copied, 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = BANK_CONFIG.account;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(t.stk_copied, 'success');
    });
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
// Callback Status (legacy support)
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
    loadDonors();

    // Kiểm tra HWID đã donate chưa (nếu mở từ app desktop)
    if (appHWID) {
        checkHwidDonateStatus(appHWID);
    }

    // Close checkout on overlay click
    document.getElementById('checkout-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeCheckout();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('checkout-overlay').classList.contains('active')) {
            closeCheckout();
        }
    });
});

// ============================================================
// Donors Wall
// ============================================================
const AVATAR_COLORS = [
    '#0088cc', '#e53935', '#43a047', '#fb8c00',
    '#8e24aa', '#00897b', '#3949ab', '#d81b60'
];

function getAvatarColor(index) {
    return AVATAR_COLORS[index % AVATAR_COLORS.length];
}

function timeAgo(dateStr) {
    const t = TRANSLATIONS[currentLang];
    const now = new Date();
    const date = new Date(dateStr.replace(' ', 'T') + '+07:00');
    const diff = Math.floor((now - date) / 1000);

    if (diff < 60) return t.time_just_now;
    if (diff < 3600) return Math.floor(diff / 60) + ' ' + t.time_minutes_ago;
    if (diff < 86400) return Math.floor(diff / 3600) + ' ' + t.time_hours_ago;
    return Math.floor(diff / 86400) + ' ' + t.time_days_ago;
}

function extractDonorName(content) {
    const t = TRANSLATIONS[currentLang];
    if (!content) return t.donor_anonymous;
    // Remove SePay payment references (PAYxxxxx patterns)
    let cleaned = content.replace(/PAY[A-Za-z0-9]+/gi, '').trim();
    // Remove common bank prefixes
    cleaned = cleaned.replace(/^(CT |CK |TT |IBFT |FAST )/i, '').trim();
    // Remove long number sequences
    cleaned = cleaned.replace(/\d{6,}/g, '').trim();
    // Remove DONATE- codes
    cleaned = cleaned.replace(/DONATE-?[A-Z0-9]{4,}/gi, '').trim();
    // Remove extra whitespace
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    return cleaned || t.donor_anonymous;
}

function formatDonorAmount(amount) {
    return new Intl.NumberFormat('vi-VN').format(amount) + '₫';
}

function renderDonors(donors) {
    const list = document.getElementById('donors-list');
    const empty = document.getElementById('donors-empty');

    list.innerHTML = '';

    if (!donors || donors.length === 0) {
        empty.style.display = 'block';
        return;
    }

    empty.style.display = 'none';

    donors.forEach((donor, i) => {
        const name = extractDonorName(donor.content);
        const initial = name.charAt(0).toUpperCase();
        const color = getAvatarColor(i);
        const time = timeAgo(donor.date);
        const amount = formatDonorAmount(donor.amount);

        const item = document.createElement('div');
        item.className = 'donor-item';
        item.style.animationDelay = `${i * 0.05}s`;
        item.innerHTML = `
            <div class="donor-avatar" style="background:${color}">${initial}</div>
            <div class="donor-info">
                <div class="donor-name">${escapeHtml(name)}</div>
                <div class="donor-time">${time}</div>
            </div>
            <div class="donor-amount">${amount}</div>
        `;
        list.appendChild(item);
    });

    // Start auto-scroll after items render
    if (donors.length > 2) {
        setTimeout(() => initAutoScroll(), 600);
    }
}

function updateDonorStats(stats) {
    const amountEl = document.getElementById('stat-total-amount');
    const countEl = document.getElementById('stat-total-donors');

    if (stats.total_amount !== undefined) {
        amountEl.textContent = formatDonorAmount(stats.total_amount);
    }
    if (stats.total_count !== undefined) {
        countEl.textContent = stats.total_count;
    }
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

async function loadDonors() {
    if (!WORKER_URL) {
        const section = document.getElementById('donors-section');
        if (section) section.style.display = 'none';
        return;
    }

    try {
        const res = await fetch(WORKER_URL + '?limit=100');
        const data = await res.json();

        if (data.status === 'success') {
            updateDonorStats(data.stats);
            renderDonors(data.donors);
        } else {
            document.getElementById('donors-list').innerHTML = '';
            document.getElementById('donors-empty').style.display = 'block';
        }
    } catch (err) {
        console.error('Failed to load donors:', err);
        document.getElementById('donors-list').innerHTML = '';
        document.getElementById('donors-empty').style.display = 'block';
    }
}

// ============================================================
// Auto-Scroll Engine — Seamless Infinite Loop
// ============================================================
function initAutoScroll() {
    const list = document.getElementById('donors-list');
    if (!list) return;

    // Duplicate all items to create seamless loop
    const originalItems = Array.from(list.children);
    originalItems.forEach(item => {
        const clone = item.cloneNode(true);
        clone.classList.add('donor-clone');
        clone.style.animation = 'none';
        clone.style.opacity = '1';
        list.appendChild(clone);
    });

    // Calculate height of the original content block
    const gap = parseFloat(getComputedStyle(list).gap) || 0;
    let totalOriginalHeight = 0;
    originalItems.forEach((el, i) => {
        totalOriginalHeight += el.offsetHeight;
        if (i < originalItems.length - 1) totalOriginalHeight += gap;
    });
    totalOriginalHeight += gap; // gap before clones start

    // Disable smooth scroll for instant position resets
    list.style.scrollBehavior = 'auto';

    const SPEED = 0.4;
    const RESUME_DELAY = 2500;

    let scrollPos = 0;
    let paused = false;
    let userInteracting = false;
    let resumeTimer = null;

    function tick() {
        if (!paused && !userInteracting) {
            scrollPos += SPEED;

            // Seamless reset — jump back without visual glitch
            if (scrollPos >= totalOriginalHeight) {
                scrollPos -= totalOriginalHeight;
            }

            list.scrollTop = scrollPos;
        }
        requestAnimationFrame(tick);
    }

    function pauseScroll() {
        paused = true;
        clearTimeout(resumeTimer);
    }

    function scheduleResume() {
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => {
            scrollPos = list.scrollTop;
            if (scrollPos >= totalOriginalHeight) {
                scrollPos -= totalOriginalHeight;
                list.scrollTop = scrollPos;
            }
            paused = false;
            userInteracting = false;
        }, RESUME_DELAY);
    }

    list.addEventListener('mouseenter', pauseScroll);
    list.addEventListener('mouseleave', scheduleResume);

    list.addEventListener('touchstart', () => {
        userInteracting = true;
        pauseScroll();
    }, { passive: true });
    list.addEventListener('touchend', () => {
        userInteracting = false;
        scheduleResume();
    }, { passive: true });

    list.addEventListener('wheel', () => {
        pauseScroll();
        userInteracting = true;
        requestAnimationFrame(() => { scrollPos = list.scrollTop; });
        scheduleResume();
    }, { passive: true });

    requestAnimationFrame(tick);
}

// ============================================================
// Download QR Code
// ============================================================
function downloadQR() {
    const t = TRANSLATIONS[currentLang];
    const qrImg = document.getElementById('checkout-qr-img');
    if (!qrImg || !qrImg.src) return;

    // Create a canvas to draw the QR image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = qrImg.naturalWidth || 300;
    canvas.height = qrImg.naturalHeight || 300;
    ctx.drawImage(qrImg, 0, 0);

    // Download as PNG
    const link = document.createElement('a');
    link.download = `QR_Donate_${currentOrderCode || 'truong-it'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    showToast(t.qr_downloaded, 'success');

    // Visual feedback on button
    const btn = document.getElementById('btn-download-qr');
    btn.classList.add('copied');
    setTimeout(() => btn.classList.remove('copied'), 1500);
}

// ============================================================
// Copy STK (Account Number)
// ============================================================
function copySTK() {
    const t = TRANSLATIONS[currentLang];
    navigator.clipboard.writeText(BANK_CONFIG.account).then(() => {
        showToast(t.stk_copied, 'success');

        // Visual feedback on button
        const btn = document.getElementById('btn-copy-stk');
        const originalIcon = btn.querySelector('i');
        const originalText = btn.querySelector('span');
        
        originalIcon.className = 'fas fa-check';
        originalText.textContent = t.copied;
        btn.classList.add('copied');

        setTimeout(() => {
            originalIcon.className = 'fas fa-copy';
            originalText.textContent = t.copy_stk;
            btn.classList.remove('copied');
        }, 1500);
    });
}

// ============================================================
// Bank Selector — VietQR Deep Link
// ============================================================
let bankAppsCache = null;

function detectPlatform() {
    const ua = navigator.userAgent || '';
    if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
    if (/Android/i.test(ua)) return 'android';
    return 'desktop';
}

async function loadBankApps() {
    if (bankAppsCache) return bankAppsCache;

    const platform = detectPlatform();
    let apiUrl;

    if (platform === 'ios') {
        apiUrl = 'https://api.vietqr.io/v2/ios-app-deeplinks';
    } else {
        apiUrl = 'https://api.vietqr.io/v2/android-app-deeplinks';
    }

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        bankAppsCache = (data.apps || []).sort((a, b) => b.monthlyInstall - a.monthlyInstall);
        return bankAppsCache;
    } catch (err) {
        console.error('Failed to load bank apps:', err);
        return [];
    }
}

function renderBankList(banks) {
    const t = TRANSLATIONS[currentLang];
    const list = document.getElementById('bank-list');
    list.innerHTML = '';

    if (banks.length === 0) {
        list.innerHTML = `<div class="bank-list-empty"><i class="fas fa-search" style="font-size:1.5rem;opacity:0.3;margin-bottom:0.5rem;display:block;"></i>${t.bank_not_found}</div>`;
        return;
    }

    banks.forEach(bank => {
        const item = document.createElement('div');
        item.className = 'bank-item';
        const badgeClass = bank.autofill ? 'autofill' : 'no-autofill';
        const badgeIcon = bank.autofill ? '<i class="fas fa-check"></i>' : '';
        const badgeText = bank.autofill ? t.autofill_yes : t.autofill_no;
        item.innerHTML = `
            <img class="bank-item-logo" src="${bank.appLogo}" alt="${bank.appName}" loading="lazy" onerror="this.style.display='none'">
            <div class="bank-item-info">
                <div class="bank-item-name">${escapeHtml(bank.appName.replace(/^\u200e/, ''))}</div>
                <div class="bank-item-full">${escapeHtml(bank.bankName)}</div>
            </div>
            <span class="bank-item-badge ${badgeClass}">${badgeIcon} ${badgeText}</span>
            <i class="fas fa-chevron-right bank-item-arrow"></i>
        `;
        item.addEventListener('click', () => openBankApp(bank));
        list.appendChild(item);
    });
}

async function openBankSelector() {
    const overlay = document.getElementById('bank-selector-overlay');
    overlay.classList.add('active');

    // Load bank list
    const banks = await loadBankApps();
    renderBankList(banks);

    // Set up search
    const searchInput = document.getElementById('bank-search');
    searchInput.value = '';
    searchInput.focus();

    // Remove any previous listener to avoid duplicates
    searchInput.oninput = () => {
        const query = searchInput.value.toLowerCase().trim();
        const filtered = banks.filter(b =>
            b.appName.toLowerCase().includes(query) ||
            b.bankName.toLowerCase().includes(query) ||
            b.appId.toLowerCase().includes(query)
        );
        renderBankList(filtered);
    };
}

function closeBankSelector() {
    const overlay = document.getElementById('bank-selector-overlay');
    overlay.classList.remove('active');
}

function openBankApp(bank) {
    const t = TRANSLATIONS[currentLang];
    const amount = parseInt(selectedAmount);
    const content = currentOrderCode || '';

    // Step 1: Copy account number to clipboard for easy paste
    navigator.clipboard.writeText(BANK_CONFIG.account).catch(() => {});

    // Step 2: Build VietQR deep link
    const deepLinkUrl = `https://dl.vietqr.io/pay?app=${encodeURIComponent(bank.appId)}&ba=${BANK_CONFIG.account}@${BANK_CONFIG.bank_code}&am=${amount}&tn=${encodeURIComponent(content)}&bn=${encodeURIComponent(BANK_CONFIG.name)}`;

    closeBankSelector();

    // Step 3: Open deep link
    const platform = detectPlatform();
    if (platform === 'desktop') {
        window.open(deepLinkUrl, '_blank');
    } else {
        window.location.href = deepLinkUrl;
    }

    // Step 4: Always notify user that account number was copied
    showToast(t.stk_copied, 'success');
}

// Close bank selector on overlay click or Escape
document.addEventListener('DOMContentLoaded', () => {
    const bankOverlay = document.getElementById('bank-selector-overlay');
    if (bankOverlay) {
        bankOverlay.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) closeBankSelector();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('bank-selector-overlay')?.classList.contains('active')) {
            closeBankSelector();
        }
    });
});
