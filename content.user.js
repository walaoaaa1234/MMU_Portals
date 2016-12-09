// ==UserScript==
// @name         MMU_Portals
// @namespace    undefined
// @version      0.1
// @description  try to take over MMU!
// @author       .Js0n
// @updateURL    https://github.com/walaoaaa1234/MMU_Portals/raw/master/content.user.js
// @downloadURL  https://github.com/walaoaaa1234/MMU_Portals/raw/master/content.user.js
// @match        *://mmls.mmu.edu.my/
// @match        *://cms.mmu.edu.my/*
// @match        *://online.mmu.edu.my/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

var username = '';
var password = '';

$(document).ready(function(){
    'use strict';
    if (username === '' || password === '') {
        alert('Please config the script file');
    } else if (window.location.hostname == "cms.mmu.edu.my" && getCookie("PS_TOKEN") === '') {
        //alert(getCookie("PS_TOKEN"));
        $("#userid").val(username);
        $("#pwd").val(password);
        submitAction(document.login);
    } else if (window.location.hostname == 'cms.mmu.edu.my' && /My%20Weekly%20Schedule/.test(window.location.href)) {
        $("#DERIVED_CLASS_S_SSR_DISP_TITLE").click();
        submitAction_win0(document.win0,'DERIVED_CLASS_S_SSR_REFRESH_CAL$38$');
    } else if (window.location.href == "https://mmls.mmu.edu.my/") {
        $("body > div.container > div:nth-child(4) > div > div > div > div.col-sm-4 > div.row.hidden-xs > div > div > div.panel-body > form > fieldset > div > div > div:nth-child(1) > div > input").val(username);
        $("body > div.container > div:nth-child(4) > div > div > div > div.col-sm-4 > div.row.hidden-xs > div > div > div.panel-body > form > fieldset > div > div > div:nth-child(2) > div > #alert_msg").val(password);
        $("body > div.container > div:nth-child(4) > div > div > div > div.col-sm-4 > div.row.hidden-xs > div > div > div.panel-body > form").submit();
    } else if (window.location.href === "https://cms.mmu.edu.my/psc/csprd/EMPLOYEE/HRMS/s/WEBLIB_TIMEOUT.PT_TIMEOUTWARNING.FieldFormula.IScript_TIMEOUTWARNING?") {
        window.location.href = 'https://cms.mmu.edu.my/psp/csprd/EMPLOYEE/HRMS/?cmd=resettimeout';
        this.close();
    } else if (window.location.hostname == "online.mmu.edu.my") {
        $("#form_loginUsername").val(username);
        $("#login-password").val(password);
        $("#login-form > fieldset > input").click();
    }

        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
    });
