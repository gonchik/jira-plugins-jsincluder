(function ($) {
    AJS.toInit(function () {
        var form = $('#issue-create');
        JS_INCLUDER.executeCreateScripts(form.find('input[name="pid"]').val(), form.find('input[name="issuetype"]').val(), $(document));
    });
})(AJS.$);