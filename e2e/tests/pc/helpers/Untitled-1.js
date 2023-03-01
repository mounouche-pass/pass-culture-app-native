{
  attachments: [],
  headers: Map(25) {
    'delivered-to' => {
      value: [Array],
      html: '<span class="mp_address_group"><a href="mailto:dev-tests-e2e+1677676880285@passculture.team" class="mp_address_email">dev-tests-e2e+1677676880285@passculture.team</a></span>',
      text: 'dev-tests-e2e+1677676880285@passculture.team'
    },
    'received' => [
      'by 2002:aa7:c7d5:0:b0:4b6:1437:7ecc with SMTP id o21csp1589022eds; Wed, 1 Mar 2023 05:21:43 -0800 (PST)',
      'from gt.d.sender-sib.com (gt.d.sender-sib.com. [77.32.148.20]) by mx.google.com with ESMTPS id v3-20020a05600c15c300b003dec8496d9asi9473009wmf.4.2023.03.01.05.21.43 for <dev-tests-e2e+1677676880285@passculture.team> (version=TLS1_3 cipher=TLS_AES_256_GCM_SHA384 bits=256/256); Wed, 01 Mar 2023 05:21:43 -0800 (PST)',
      'by smtp-relay.sendinblue.com with ESMTP id 07f94b53-b3e7-41a4-a297-d5148ff5cd94; Wed Mar 01 2023 13:21:42 GMT+0000'
    ],
    'x-google-smtp-source' => 'AK7set98HL4MBffHx66j7N4KjQB9dvZsmN58Ze3Fy/gd3GEISrITwpfZypfLfXDvOEu9a67pe7cH',
    'x-received' => 'by 2002:a05:600c:3414:b0:3eb:29fe:70ec with SMTP id y20-20020a05600c341400b003eb29fe70ecmr5511390wmp.27.1677676903296; Wed, 01 Mar 2023 05:21:43 -0800 (PST)',
    'arc-seal' => 'i=1; a=rsa-sha256; t=1677676903; cv=none; d=google.com; s=arc-20160816; b=YyydNDWvxSZh+1MFkBNyCt/JE7r/MWTYK3Wi909X9l2OqMLiRin1K9pRolw6fWFMLl OGbjjur+hVk+H9exOaIgJ1Dc4OVnhZD57ldg/bj0QypIqzYK456BJ7/GVh6GpEz46grH KIU7M0dUTFxzIjxMbIvpAxhk4XYl/IkhsePchU9a6f1qAEx8vhC6Ix0Vz15+vQaT/tI3 lFbvgIq1h6SAaaTbdx1TD0p05EVND8U1sS4CWSnFA2Ly+IhJf9nNC8zChNCQQCNGm89P Hd11ziF0Or6sQVbh6M1E3W6nmIY/9XbEQ4TomFLXXwbKGYKtMCtbH2YRh5outcjcsOaa DB1Q==',
    'arc-message-signature' => 'i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816; h=list-unsubscribe:from:feedback-id:list-unsubscribe-post :mime-version:reply-to:origin-messageid:message-id:subject:date:to :dkim-signature; bh=g3Or0KlgEzFzeQEooOoSCKBqZ2MXE+d2uZN7tYLiSYk=; b=iOrss2ug6TwRDYEIT4GPkDbGWvxhnLvIxuRMzVPjF/h0pV0XlUQzcsHuB7EBs3iTWx d5oiHfh4aDTnvn1IjKoXCFfhrOSAyk8+O21qkkf+vE4Mt2ndVufHGkWE5rnLvH4/aN7d wEyycO+UwalNn8PM8Vt192GMFw3bXTvarh3Qvnq4omEJgu1rFrxTZxAV+cfYu9hCDGZ+ 1Tc17hL4E7VYBVvznjx5hUcSvn7IlPnTcuAAT+SOZMFh/D3xzYvtrKg3HqxnW8KGMeXU HDOxGgmQnRGN/xvE6S/+jN6FiQEFDNwrLqVfhXpU+y7dDG6n/NNof7c+IjYScBeA4Ry7 lMuw==',
    'arc-authentication-results' => 'i=1; mx.google.com; dkim=pass header.i=@sendinblue.com header.s=mail header.b=wSe8KMZk; spf=pass (google.com: domain of bounces-133768474-support=example.com@gt.d.sender-sib.com designates 77.32.148.20 as permitted sender) smtp.mailfrom="bounces-133768474-support=example.com@gt.d.sender-sib.com"',
    'return-path' => {
      value: [Array],
      html: '<span class="mp_address_group"><a href="mailto:bounces-133768474-support=example.com@gt.d.sender-sib.com" class="mp_address_email">bounces-133768474-support=example.com@gt.d.sender-sib.com</a></span>',
      text: 'bounces-133768474-support=example.com@gt.d.sender-sib.com'
    },
    'received-spf' => 'pass (google.com: domain of bounces-133768474-support=example.com@gt.d.sender-sib.com designates 77.32.148.20 as permitted sender) client-ip=77.32.148.20;',
    'authentication-results' => 'mx.google.com; dkim=pass header.i=@sendinblue.com header.s=mail header.b=wSe8KMZk; spf=pass (google.com: domain of bounces-133768474-support=example.com@gt.d.sender-sib.com designates 77.32.148.20 as permitted sender) smtp.mailfrom="bounces-133768474-support=example.com@gt.d.sender-sib.com"',
    'dkim-signature' => { value: 'v=1', params: [Object] },
    'x-mailin-eid' => 'MTMzNzY4NDc0fmRldi10ZXN0cy1lMmUrMTY3NzY3Njg4MDI4NUBwYXNzY3VsdHVyZS50ZWFtfjwyMDIzMDMwMTEzMjEuNzAyNjQ3MjE2NzhAc210cC1yZWxheS5tYWlsaW4uZnI%2Bfmd0LmQuc2VuZGVyLXNpYi5jb20%3D',
    'to' => {
      value: [Array],
      html: '<span class="mp_address_group"><a href="mailto:dev-tests-e2e+1677676880285@passculture.team" class="mp_address_email">dev-tests-e2e+1677676880285@passculture.team</a></span>',
      text: 'dev-tests-e2e+1677676880285@passculture.team'
    },
    'date' => 2023-03-01T13:21:42.000Z,
    'subject' => 'Confirme ton email',
    'message-id' => '<07f94b53-b3e7-41a4-a297-d5148ff5cd94@smtp-relay.sendinblue.com>',
    'origin-messageid' => '<202303011321.70264721678@smtp-relay.mailin.fr>',
    'content-type' => { value: 'multipart/alternative', params: [Object] },
    'reply-to' => {
      value: [Array],
      html: '<span class="mp_address_group"><span class="mp_address_name">pass Culture</span> &lt;<a href="mailto:support@example.com" class="mp_address_email">support@example.com</a>&gt;</span>',
      text: 'pass Culture <support@example.com>'
    },
    'mime-version' => '1.0',
    'x-sib-id' => 'oW0UjLC4d-Mdu0vB10zueC-JRpcpuW4iwoEmyDNkSQH4oc5gmTBHw7HCbSTC6yl8P016NRFhC2Y3XvWkbA2dUJbNOma6AXOAjL_fseSlBkh1J-8fCjxokfApfRfCAI-CQM60_eFgzWgX90blrlDba5M6s72HGqBlPtWH7uYSAIm6GxFNL_T-QYhQ6Q1mrpw-4bv6N2g2zkZYtA',
    'x-csa-complaints' => 'csa-complaints@eco.de',
    'list' => { 'unsubscribe-post': [Object], unsubscribe: [Object] },
    'feedback-id' => '77.32.148.20:3897038_-1:3897038:Sendinblue',
    'from' => {
      value: [Array],
      html: '<span class="mp_address_group"><span class="mp_address_name">pass Culture</span> &lt;<a href="mailto:support@example.com" class="mp_address_email">support@example.com</a>&gt;</span>',
      text: 'pass Culture <support@example.com>'
    }
  },
  headerLines: [
    {
      key: 'delivered-to',
      line: 'Delivered-To: dev-tests-e2e+1677676880285@passculture.team'
    },
    {
      key: 'received',
      line: 'Received: by 2002:aa7:c7d5:0:b0:4b6:1437:7ecc with SMTP id o21csp1589022eds;\r\n' +
        '        Wed, 1 Mar 2023 05:21:43 -0800 (PST)'
    },
    {
      key: 'x-google-smtp-source',
      line: 'X-Google-Smtp-Source: AK7set98HL4MBffHx66j7N4KjQB9dvZsmN58Ze3Fy/gd3GEISrITwpfZypfLfXDvOEu9a67pe7cH'
    },
    {
      key: 'x-received',
      line: 'X-Received: by 2002:a05:600c:3414:b0:3eb:29fe:70ec with SMTP id y20-20020a05600c341400b003eb29fe70ecmr5511390wmp.27.1677676903296;\r\n' +
        '        Wed, 01 Mar 2023 05:21:43 -0800 (PST)'
    },
    {
      key: 'arc-seal',
      line: 'ARC-Seal: i=1; a=rsa-sha256; t=1677676903; cv=none;\r\n' +
        '        d=google.com; s=arc-20160816;\r\n' +
        '        b=YyydNDWvxSZh+1MFkBNyCt/JE7r/MWTYK3Wi909X9l2OqMLiRin1K9pRolw6fWFMLl\r\n' +
        '         OGbjjur+hVk+H9exOaIgJ1Dc4OVnhZD57ldg/bj0QypIqzYK456BJ7/GVh6GpEz46grH\r\n' +
        '         KIU7M0dUTFxzIjxMbIvpAxhk4XYl/IkhsePchU9a6f1qAEx8vhC6Ix0Vz15+vQaT/tI3\r\n' +
        '         lFbvgIq1h6SAaaTbdx1TD0p05EVND8U1sS4CWSnFA2Ly+IhJf9nNC8zChNCQQCNGm89P\r\n' +
        '         Hd11ziF0Or6sQVbh6M1E3W6nmIY/9XbEQ4TomFLXXwbKGYKtMCtbH2YRh5outcjcsOaa\r\n' +
        '         DB1Q=='
    },
    {
      key: 'arc-message-signature',
      line: 'ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\r\n' +
        '        h=list-unsubscribe:from:feedback-id:list-unsubscribe-post\r\n' +
        '         :mime-version:reply-to:origin-messageid:message-id:subject:date:to\r\n' +
        '         :dkim-signature;\r\n' +
        '        bh=g3Or0KlgEzFzeQEooOoSCKBqZ2MXE+d2uZN7tYLiSYk=;\r\n' +
        '        b=iOrss2ug6TwRDYEIT4GPkDbGWvxhnLvIxuRMzVPjF/h0pV0XlUQzcsHuB7EBs3iTWx\r\n' +
        '         d5oiHfh4aDTnvn1IjKoXCFfhrOSAyk8+O21qkkf+vE4Mt2ndVufHGkWE5rnLvH4/aN7d\r\n' +
        '         wEyycO+UwalNn8PM8Vt192GMFw3bXTvarh3Qvnq4omEJgu1rFrxTZxAV+cfYu9hCDGZ+\r\n' +
        '         1Tc17hL4E7VYBVvznjx5hUcSvn7IlPnTcuAAT+SOZMFh/D3xzYvtrKg3HqxnW8KGMeXU\r\n' +
        '         HDOxGgmQnRGN/xvE6S/+jN6FiQEFDNwrLqVfhXpU+y7dDG6n/NNof7c+IjYScBeA4Ry7\r\n' +
        '         lMuw=='
    },
    {
      key: 'arc-authentication-results',
      line: 'ARC-Authentication-Results: i=1; mx.google.com;\r\n' +
        '       dkim=pass header.i=@sendinblue.com header.s=mail header.b=wSe8KMZk;\r\n' +
        '       spf=pass (google.com: domain of bounces-133768474-support=example.com@gt.d.sender-sib.com designates 77.32.148.20 as permitted sender) smtp.mailfrom="bounces-133768474-support=example.com@gt.d.sender-sib.com"'
    },
    {
      key: 'return-path',
      line: 'Return-Path: <bounces-133768474-support=example.com@gt.d.sender-sib.com>'
    },
    {
      key: 'received',
      line: 'Received: from gt.d.sender-sib.com (gt.d.sender-sib.com. [77.32.148.20])\r\n' +
        '        by mx.google.com with ESMTPS id v3-20020a05600c15c300b003dec8496d9asi9473009wmf.4.2023.03.01.05.21.43\r\n' +
        '        for <dev-tests-e2e+1677676880285@passculture.team>\r\n' +
        '        (version=TLS1_3 cipher=TLS_AES_256_GCM_SHA384 bits=256/256);\r\n' +
        '        Wed, 01 Mar 2023 05:21:43 -0800 (PST)'
    },
    {
      key: 'received-spf',
      line: 'Received-SPF: pass (google.com: domain of bounces-133768474-support=example.com@gt.d.sender-sib.com designates 77.32.148.20 as permitted sender) client-ip=77.32.148.20;'
    },
    {
      key: 'authentication-results',
      line: 'Authentication-Results: mx.google.com;\r\n' +
        '       dkim=pass header.i=@sendinblue.com header.s=mail header.b=wSe8KMZk;\r\n' +
        '       spf=pass (google.com: domain of bounces-133768474-support=example.com@gt.d.sender-sib.com designates 77.32.148.20 as permitted sender) smtp.mailfrom="bounces-133768474-support=example.com@gt.d.sender-sib.com"'
    },
    {
      key: 'dkim-signature',
      line: 'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=sendinblue.com;\r\n' +
        ' q=dns/txt; s=mail; bh=g3Or0KlgEzFzeQEooOoSCKBqZ2MXE+d2uZN7tYLiSYk=;\r\n' +
        ' h=from:reply-to:subject:date:to:mime-version:content-type:list-unsubscribe:x-csa-complaints:list-unsubscribe-post;\r\n' +
        '        b=wSe8KMZkOP9IrnW3vERWHBPO5AUUPquGQfr6NI2bc2niCR8PVgPBCRTDBFDMA2X3eSvZHMDaYKBk\r\n' +
        '        jURa1vG1t9d6OptvkJexEFTRJAlwjELvq4VpTOWqVkG68lxCBhNdMn57H9zhB5guybhoK1droOfH\r\n' +
        '        Z+lgYKCrmAJ0/NWs47k='
    },
    {
      key: 'received',
      line: 'Received: by smtp-relay.sendinblue.com with ESMTP id 07f94b53-b3e7-41a4-a297-d5148ff5cd94; Wed Mar 01 2023 13:21:42 GMT+0000'
    },
    {
      key: 'x-mailin-eid',
      line: 'X-Mailin-EID: MTMzNzY4NDc0fmRldi10ZXN0cy1lMmUrMTY3NzY3Njg4MDI4NUBwYXNzY3VsdHVyZS50ZWFtfjwyMDIzMDMwMTEzMjEuNzAyNjQ3MjE2NzhAc210cC1yZWxheS5tYWlsaW4uZnI%2Bfmd0LmQuc2VuZGVyLXNpYi5jb20%3D'
    },
    {
      key: 'to',
      line: 'To: <dev-tests-e2e+1677676880285@passculture.team>'
    },
    { key: 'date', line: 'Date: Wed, 01 Mar 2023 13:21:42 +0000' },
    { key: 'subject', line: 'Subject: Confirme ton email' },
    {
      key: 'message-id',
      line: 'Message-Id: <07f94b53-b3e7-41a4-a297-d5148ff5cd94@smtp-relay.sendinblue.com>'
    },
    {
      key: 'origin-messageid',
      line: 'Origin-messageId: <202303011321.70264721678@smtp-relay.mailin.fr>'
    },
    {
      key: 'content-type',
      line: 'Content-Type: multipart/alternative;\r\n' +
        ' boundary="--_SiB-69da76414185fab4-Part_1"'
    },
    {
      key: 'reply-to',
      line: 'Reply-To: pass Culture <support@example.com>'
    },
    { key: 'mime-version', line: 'MIME-Version: 1.0' },
    {
      key: 'x-sib-id',
      line: 'X-sib-id: oW0UjLC4d-Mdu0vB10zueC-JRpcpuW4iwoEmyDNkSQH4oc5gmTBHw7HCbSTC6yl8P016NRFhC2Y3XvWkbA2dUJbNOma6AXOAjL_fseSlBkh1J-8fCjxokfApfRfCAI-CQM60_eFgzWgX90blrlDba5M6s72HGqBlPtWH7uYSAIm6GxFNL_T-QYhQ6Q1mrpw-4bv6N2g2zkZYtA'
    },
    {
      key: 'x-csa-complaints',
      line: 'X-CSA-Complaints: csa-complaints@eco.de'
    },
    {
      key: 'list-unsubscribe-post',
      line: 'List-Unsubscribe-Post: List-Unsubscribe=One-Click'
    },
    {
      key: 'feedback-id',
      line: 'Feedback-ID: 77.32.148.20:3897038_-1:3897038:Sendinblue'
    },
    { key: 'from', line: 'From: "pass Culture" <support@example.com>' },
    {
      key: 'list-unsubscribe',
      line: 'List-Unsubscribe: <mailto:unsubscribe-t@gt.d.sender-sib.com?subject=unsub-MTMzNzY4NDc0fmRldi10ZXN0cy1lMmUrMTY3NzY3Njg4MDI4NUBwYXNzY3VsdHVyZS50ZWFtfjwyMDIzMDMwMTEzMjEuNzAyNjQ3MjE2NzhAc210cC1yZWxheS5tYWlsaW4uZnI-fnBhc3MgQ3VsdHVyZSA8c3VwcG9ydEBleGFtcGxlLmNvbT5-MDdmOTRiNTMtYjNlNy00MWE0LWEyOTctZDUxNDhmZjVjZDk0&body=MTMzNzY4NDc0fmRldi10ZXN0cy1lMmUrMTY3NzY3Njg4MDI4NUBwYXNzY3VsdHVyZS50ZWFtfjwyMDIzMDMwMTEzMjEuNzAyNjQ3MjE2NzhAc210cC1yZWxheS5tYWlsaW4uZnI-fnBhc3MgQ3VsdHVyZSA8c3VwcG9ydEBleGFtcGxlLmNvbT5-MDdmOTRiNTMtYjNlNy00MWE0LWEyOTctZDUxNDhmZjVjZDk0>, <https://dijhadi.r.af.d.sendibt2.com/tr/un/li/v8kp3iCXke9xGNYXom1KUz7kae0uybfueVxPDepAdEa7rhfqvmDGQdp9MpWs4DTMSXqTgOF0J92qQb9hnqDg_bu3VQwILQw12fABsicTIqtttqmcY2A5eoUuqsudcL3EDvobkNK9m6zCXiGUS321DlrWLnxhqBqRmnDIfZENYlnZbHydqgfGRP22jBnaGvigBVr2POaWee4Xcdo-woiKsaQZKmsjfFfxAREWSXtG3-9loiwyYDgnHpXD5T2ga6thlt-i6uZMjREHwdWTTTuwqx9qAKCpoj1ETxXV4g>'
    }
  ],
  html: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n' +
    `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="format-detection" content="telephone=no"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Confirme ton email</title><style type="text/css" emogrify="no">#outlook a { padding:0; } .ExternalClass { width:100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; } table td { border-collapse: collapse; mso-line-height-rule: exactly; } .editable.image { font-size: 0 !important; line-height: 0 !important; } .nl2go_preheader { display: none !important; mso-hide:all !important; mso-line-height-rule: exactly; visibility: hidden !important; line-height: 0px !important; font-size: 0px !important; } body { width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0; } img { outline:none; text-decoration:none; -ms-interpolation-mode: bicubic; } a img { border:none; } table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; } th { font-weight: normal; text-align: left; } *[class="gmail-fix"] { display: none !important; } </style><style type="text/css" emogrify="no"> @media (max-width: 600px) { .gmx-killpill { content: ' \\03D1';} } </style><style type="text/css" emogrify="no">@media (max-width: 600px) { .gmx-killpill { content: ' \\03D1';} .r0-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 320px !important } .r1-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 320px !important } .r2-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 100% !important } .r3-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 100% !important } .r4-i { background-color: #ffffff !important; padding-bottom: 20px !important; padding-left: 15px !important; padding-right: 15px !important; padding-top: 20px !important } .r5-c { box-sizing: border-box !important; display: block !important; valign: top !important; width: 100% !important } .r6-o { border-style: solid !important; width: 100% !important } .r7-i { padding-left: 0px !important; padding-right: 0px !important } .r8-c { box-sizing: border-box !important; width: 100% !important } .r9-i { padding-bottom: 15px !important; padding-top: 15px !important } .r10-i { padding-bottom: 15px !important; padding-left: 0px !important; padding-right: 0px !important; padding-top: 15px !important } .r11-i { background-color: #ffffff !important; padding-bottom: 20px !important; padding-left: 0px !important; padding-right: 0px !important; padding-top: 20px !important } .r12-c { box-sizing: border-box !important; text-align: left !important; valign: top !important; width: 100% !important } .r13-o { border-style: solid !important; margin: 0 auto 0 0 !important; width: 100% !important } .r14-i { padding-top: 15px !important; text-align: center !important } .r15-i { padding-bottom: 15px !important; padding-top: 15px !important; text-align: center !important } .r16-o { border-style: solid !important; margin: 0 auto 0 auto !important; margin-bottom: 15px !important; margin-top: 15px !important; width: 100% !important } .r17-i { text-align: center !important } .r18-r { background-color: #eb0055 !important; border-radius: 100px !important; border-width: 0px !important; box-sizing: border-box; height: initial !important; padding-bottom: 12px !important; padding-left: 5px !important; padding-right: 5px !important; padding-top: 12px !important; text-align: center !important; width: 100% !important } .r19-i { padding-bottom: 15px !important; padding-top: 15px !important; text-align: right !important } .r20-i { background-color: #eff2f7 !important; color: #3b3f44 !important; padding-bottom: 20px !important; padding-left: 15px !important; padding-right: 15px !important; padding-top: 20px !important } .r21-i { color: #3b3f44 !important; padding-left: 0px !important; padding-right: 0px !important } .r22-c { box-sizing: border-box !important; text-align: center !important; width: 100% !important } .r23-i { color: #3b3f44 !important; font-size: 0px !important; padding-bottom: 15px !important; padding-left: 77px !important; padding-right: 77px !important; padding-top: 15px !important } .r24-c { box-sizing: border-box !important; width: 32px !important } .r25-o { border-style: solid !important; margin-right: 8px !important; width: 32px !important } .r26-i { color: #3b3f44 !important } .r27-o { border-style: solid !important; margin-left: 8px !important; margin-right: 8px !important; width: 32px !important } .r28-i { color: #3b3f44 !important; padding-bottom: 0px !important; padding-top: 15px !important; text-align: center !important } .r29-i { color: #3b3f44 !important; padding-bottom: 0px !important; padding-top: 0px !important; text-align: center !important } body { -webkit-text-size-adjust: none } .nl2go-responsive-hide { display: none } .nl2go-body-table { min-width: unset !important } .mobshow { height: auto !important; overflow: visible !important; max-height: unset !important; visibility: visible !important; border: none !important } .resp-table { display: inline-table !important } .magic-resp { display: table-cell !important } } </style><!--[if !mso]><!--><style type="text/css" emogrify="no">@import url("https://fonts.googleapis.com/css2?family=Source Sans Pro"); @import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Montserrat Alternates&family=Noto Sans JP&family=Open Sans"); </style><!--<![endif]--><style type="text/css">p, h1, h2, h3, h4, ol, ul { margin: 0; } a, a:link { color: #0092ff; text-decoration: underline } .nl2go-default-textstyle { color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5 } .default-button { border-radius: 4px; color: #ffffff; font-family: arial,helvetica,sans-serif; font-size: 16px; font-style: normal; font-weight: normal; line-height: 1.15; text-decoration: none; width: 50% } .sib_class_impressum { color: #999999; font-family: arial,helvetica,sans-serif; font-size: 12px; font-style: italic } .default-heading1 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 36px } .default-heading2 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 32px } .default-heading3 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 24px } .default-heading4 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 18px } a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } .no-show-for-you { border: none; display: none; float: none; font-size: 0; height: 0; line-height: 0; max-height: 0; mso-hide: all; overflow: hidden; table-layout: fixed; visibility: hidden; width: 0; } </style><!--[if mso]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]--><style type="text/css">a:link{color: #0092ff; text-decoration: underline}</style></head><body text="#3b3f44" link="#0092ff" yahoo="fix" style=""> <table cellspacing="0" cellpadding="0" border="0" role="presentation" class="nl2go-body-table" width="100%" style="width: 100%;"><tr><td align="center" class="r0-c"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="600" class="r1-o" style="table-layout: fixed; width: 600px;"><tr><td valign="top" class=""> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><td class="r2-c" align="center"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r3-o" style="table-layout: fixed; width: 100%;"><!-- --><tr class="nl2go-responsive-hide"><td height="20" style="font-size: 20px; line-height: 20px; background-color: #ffffff;">­</td> </tr><tr><td class="r4-i" style="background-color: #ffffff;"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><th width="100%" valign="top" class="r5-c" style="font-weight: normal;"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r6-o" style="table-layout: fixed; width: 100%;"><!-- --><tr><td class="nl2go-responsive-hide" width="15" style="font-size: 0px; line-height: 1px;">­ </td> <td valign="top" class="r7-i"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><td class="r8-c"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="570" class="r6-o" style="table-layout: fixed; width: 570px;"><tr class="nl2go-responsive-hide"><td height="15" style="font-size: 15px; line-height: 15px;">­</td> </tr><tr><td class="r9-i nl2go-default-textstyle" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5;"> <label style="font-size: 20px;">Add your own html here</label><br><a href="https://www.w3schools.com/html/" style="color: #0092ff; text-decoration: underline;">Html Tutorials</a> </td> </tr><tr class="nl2go-responsive-hide"><td height="15" style="font-size: 15px; line-height: 15px;">­</td> </tr></table></td> </tr></table></td> <td class="nl2go-responsive-hide" width="15" style="font-size: 0px; line-height: 1px;">­ </td> </tr></table></th> </tr></table></td> </tr><tr class="nl2go-responsive-hide"><td height="20" style="font-size: 20px; line-height: 20px; background-color: #ffffff;">­</td> </tr></table></td> </tr><tr><td class="r2-c" align="center"> <table cellspacing="0" cellpadding="0" `... 17813 more characters,
  text: 'Add your own html here\n' +
    '[Html Tutorials](https://www.w3schools.com/html/)\n' +
    '\n' +
    '###Confirme ton adresse mail ✉️\n' +
    '\n' +
    'Pour confirmer ton adresse mail et finaliser la création de ton compte pass Culture, clique sur le lien ci-dessous 👇\n' +
    '\n' +
    '**Attention :** ce lien expire dans 30 minutes !\n' +
    '\n' +
    '[**Confirmer mon adresse email**](https://passcultureapptestauto.page.link/?link=https%3A%2F%2Fwebapp-v2.example.com%2Fsignup-confirmation%3Ftoken%3DvQoyj4U5fQXrL7XvUjeSpYp97UAUr5F6Md3yP5iZ1uM%26expiration_timestamp%3D1677678702%26email%3Ddev-tests-e2e%252B1677676880285%2540passculture.team)\n' +
    '\n' +
    'Le bouton ci-dessus ne fonctionne pas ? Désactive ton bloqueur de publicité.\n' +
    '\n' +
    'À très vite sur le pass 👋\n' +
    ' \n' +
    '\n' +
    "**L'équipe pass Culture**\n" +
    '\n' +
    '**pass Culture**\n' +
    '\n' +
    '12 rue Duhesmes, 75018, Paris\n' +
    '\n',
  textAsHtml: '<p>Add your own html here<br/>[Html Tutorials](<a href="https://www.w3schools.com/html/">https://www.w3schools.com/html/</a>)</p><p>###Confirme ton adresse mail &#x2709;&#xFE0F;</p><p>Pour confirmer ton adresse mail et finaliser la cr&eacute;ation de ton compte pass Culture, clique sur le lien ci-dessous &#x1F447;</p><p>**Attention :** ce lien expire dans 30 minutes !</p><p>[**Confirmer mon adresse email**](<a href="https://passcultureapptestauto.page.link/?link=https%3A%2F%2Fwebapp-v2.example.com%2Fsignup-confirmation%3Ftoken%3DvQoyj4U5fQXrL7XvUjeSpYp97UAUr5F6Md3yP5iZ1uM%26expiration_timestamp%3D1677678702%26email%3Ddev-tests-e2e%252B1677676880285%2540passculture.team">https://passcultureapptestauto.page.link/?link=https%3A%2F%2Fwebapp-v2.example.com%2Fsignup-confirmation%3Ftoken%3DvQoyj4U5fQXrL7XvUjeSpYp97UAUr5F6Md3yP5iZ1uM%26expiration_timestamp%3D1677678702%26email%3Ddev-tests-e2e%252B1677676880285%2540passculture.team</a>)</p><p>Le bouton ci-dessus ne fonctionne pas ? D&eacute;sactive ton bloqueur de publicit&eacute;.</p><p>&Agrave; tr&egrave;s vite sur le pass &#x1F44B;<br/>&nbsp;</p><p>**L&apos;&eacute;quipe pass Culture**</p><p>**pass Culture**</p><p>12 rue Duhesmes, 75018, Paris</p>',
  subject: 'Confirme ton email',
  date: 2023-03-01T13:21:42.000Z,
  to: {
    value: [ [Object] ],
    html: '<span class="mp_address_group"><a href="mailto:dev-tests-e2e+1677676880285@passculture.team" class="mp_address_email">dev-tests-e2e+1677676880285@passculture.team</a></span>',
    text: 'dev-tests-e2e+1677676880285@passculture.team'
  },
  from: {
    value: [ [Object] ],
    html: '<span class="mp_address_group"><span class="mp_address_name">pass Culture</span> &lt;<a href="mailto:support@example.com" class="mp_address_email">support@example.com</a>&gt;</span>',
    text: 'pass Culture <support@example.com>'
  },
  messageId: '<07f94b53-b3e7-41a4-a297-d5148ff5cd94@smtp-relay.sendinblue.com>',
  replyTo: {
    value: [ [Object] ],
    html: '<span class="mp_address_group"><span class="mp_address_name">pass Culture</span> &lt;<a href="mailto:support@example.com" class="mp_address_email">support@example.com</a>&gt;</span>',
    text: 'pass Culture <support@example.com>'
  },
  id: '1869d55fa689146a'
}

[
  '[**Confirmer mon adresse email**](https://passcultureapptestauto.page.link/?link=https%3A%2F%2Fwebapp-v2.example.com%2Fsignup-confirmation%3Ftoken%3DvQoyj4U5fQXrL7XvUjeSpYp97UAUr5F6Md3yP5iZ1uM%26expiration_timestamp%3D1677678702%26email%3Ddev-tests-e2e%252B1677676880285%2540passculture.team)',
  'https://passcultureapptestauto.page.link/?link=https%3A%2F%2Fwebapp-v2.example.com%2Fsignup-confirmation%3Ftoken%3DvQoyj4U5fQXrL7XvUjeSpYp97UAUr5F6Md3yP5iZ1uM%26expiration_timestamp%3D1677678702%26email%3Ddev-tests-e2e%252B1677676880285%2540passculture.team',
  'passcultureapptestauto.page.link',
  'https%3A%2F%2Fwebapp-v2.example.com%2Fsignup-confirmation%3Ftoken%3DvQoyj4U5fQXrL7XvUjeSpYp97UAUr5F6Md3yP5iZ1uM%26expiration_timestamp%3D1677678702%26email%3Ddev-tests-e2e%252B1677676880285%2540passculture.team',
  index: 276,
  input: 'Add your own html here\n' +
    '[Html Tutorials](https://www.w3schools.com/html/)\n' +
    '\n' +
    '###Confirme ton adresse mail ✉️\n' +
    '\n' +
    'Pour confirmer ton adresse mail et finaliser la création de ton compte pass Culture, clique sur le lien ci-dessous 👇\n' +
    '\n' +
    '**Attention :** ce lien expire dans 30 minutes !\n' +
    '\n' +
    '[**Confirmer mon adresse email**](https://passcultureapptestauto.page.link/?link=https%3A%2F%2Fwebapp-v2.example.com%2Fsignup-confirmation%3Ftoken%3DvQoyj4U5fQXrL7XvUjeSpYp97UAUr5F6Md3yP5iZ1uM%26expiration_timestamp%3D1677678702%26email%3Ddev-tests-e2e%252B1677676880285%2540passculture.team)\n' +
    '\n' +
    'Le bouton ci-dessus ne fonctionne pas ? Désactive ton bloqueur de publicité.\n' +
    '\n' +
    'À très vite sur le pass 👋\n' +
    ' \n' +
    '\n' +
    "**L'équipe pass Culture**\n" +
    '\n' +
    '**pass Culture**\n' +
    '\n' +
    '12 rue Duhesmes, 75018, Paris\n' +
    '\n',
  groups: undefined
]