(function() {
    var countEl = document.getElementById('uuidCount');
    var formatEl = document.getElementById('uuidFormat');
    var outputEl = document.getElementById('uuidOutput');
    var generateBtn = document.getElementById('uuidGenerate');
    var copyBtn = document.getElementById('uuidCopy');

    function generateUUIDv4() {
        if (crypto && crypto.randomUUID) return crypto.randomUUID();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0;
            var v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    function formatUUID(uuid, format) {
        switch (format) {
            case 'uppercase': return uuid.toUpperCase();
            case 'no-hyphens': return uuid.replace(/-/g, '');
            case 'braces': return '{' + uuid + '}';
            default: return uuid;
        }
    }

    function generate() {
        if (!outputEl) return;
        var count = parseInt(countEl ? countEl.value : 1) || 1;
        count = Math.max(1, Math.min(100, count));
        var format = formatEl ? formatEl.value : 'standard';
        var uuids = [];
        for (var i = 0; i < count; i++) {
            uuids.push(formatUUID(generateUUIDv4(), format));
        }
        outputEl.value = uuids.join('\n');
    }

    if (generateBtn) generateBtn.addEventListener('click', generate);

    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            if (!outputEl || !outputEl.value) return;
            navigator.clipboard.writeText(outputEl.value).then(function() {
                var orig = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                setTimeout(function() { copyBtn.textContent = orig; }, 1500);
            });
        });
    }

    // Auto-generate on load
    generate();
})();
