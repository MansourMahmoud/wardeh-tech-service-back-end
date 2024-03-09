const express = require("express");
var cors = require("cors");

const nodemailer = require("nodemailer");

const app = express();
app.use(cors());

//middleware for parsing JSON in request body
app.use(express.json());

const upload = require("./middleware/uploadFile");
const { ERROR } = require("./utils/httpStatusText");

app.post("/send", upload.array("images", 9), (request, response) => {
  let {
    fullName,
    phone,
    email,
    logoName,
    logoLanguages,
    whatIsLogoLanguages,
    whatIsShortcutInLogo,
    companyVision,
    advertisingPhrase,
    kind,
    age,
    geographicalArea,
    wantToAddImages,
    natureOfWork,
    differenceFromCompetitors,
    attractiveLogos,
    contentOldLogo,
    isOldLogo,
    oldLogoImageChecked,
    colorsContent,
    additionalNotes,
  } = request.body;
  console.log(oldLogoImageChecked);

  const files = request.files;
  console.log(files);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "mansourmahmoud9999@gmail.com",
      pass: "twgzuhqfivzgtkqv",
    },
  });

  const mail_option = {
    from: request.body.email || "wardeh.tech@gmail.com",
    to: "wardeh.tech@gmail.com",
    subject: "البراندينج",
    text: "البراندينج", // plain text body
    html: `
    <div dir="rtl" style="padding-right: 5px;">
    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> إسم المرسل :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          fullName ? fullName : "لم يكتب المستخدم فيها شيء"
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> الهاتف :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          phone ? phone : "لم يكتب المستخدم فيها شيء"
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> البريد الإلكتروني :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          email ? email : "لم يكتب المستخدم فيها شيء"
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> الاسم الذي يرغب العميل باستخدامه في تصميم الشعار هو :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          logoName ? logoName : "لم يكتب المستخدم فيها شيء"
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> سيكون الشعار بـ :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          logoLanguages ? logoLanguages : "لم يكتب المستخدم فيها شيء"
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> اللغات في الشعار هي :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${whatIsLogoLanguages}</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> هل ترغب بإستخدام أية اختصارات أو أحرف أولية في الشعار؟ :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          whatIsShortcutInLogo && whatIsShortcutInLogo
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> رؤية الشركة :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          companyVision ? companyVision : "لم يكتب المستخدم فيها شيء"
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> هل لدي الشركة عبارة إعلانية معينة ترغب بإدراجها مع الشعار؟ :-  </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          advertisingPhrase && advertisingPhrase
        }</p>
    </div>

    <div>
        <p>البيانات الخاصة بالشريحة الإستهلاكية المستهدفة لمنشأة العميل</p>
        <div>
            <p style="font-size: 16px; color: black; margin: 0;"> الجنس :- </p>
            <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${kind}</p>
        </div>

        <div>
            <p style="font-size: 16px; color: black; margin: 0;"> العمر :- </p>
            <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${age}</p>
        </div>

        <div>
            <p style="font-size: 16px; color: black; margin: 0;"> المنطقة الجغرافية :- </p>
            <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${geographicalArea}</p>
        </div>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> ما هي طبيعة عملك :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          natureOfWork ? natureOfWork : "لم يكتب المستخدم فيها شيء"
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> ما الذي يجعلك مختلفا عن منافسيك؟ :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          differenceFromCompetitors
            ? differenceFromCompetitors
            : "لم يكتب المستخدم فيها شيء"
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> اخبرنا عن بعض الشعارات التي تعجبك أو تلفت انتباهك. :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          attractiveLogos ? attractiveLogos : "لم يكتب المستخدم فيها شيء"
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> هل ترغب بإدراج عناصر معينة في تصميم الشعار؟  :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          wantToAddImages && wantToAddImages
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> هل لديك شعاراً قديما؟ :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin: 0;">${
          isOldLogo ? isOldLogo : ""
        }</p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          oldLogoImageChecked ? oldLogoImageChecked : ""
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> ما الذي لا يعجبك بشعارك القديم؟:- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          contentOldLogo ? contentOldLogo : "لم يكتب المستخدم فيها شيء"
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> ما الألوان التي تعجبك وترغب بإستخدامها في الشعار؟ :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          colorsContent ? colorsContent : "لم يكتب المستخدم فيها شيء"
        }</p>
    </div>

    <div>
        <p style="font-size: 16px; color: black; margin: 0;"> هل هناك ملاحظات تود إضافتها؟ :- </p>
        <p style="font-size: 16px; color: green; font-weight: 600; margin-top: 0;">${
          additionalNotes && additionalNotes
        }</p>
    </div>
</div>


      `,
    attachments: files?.map((file, index) => ({
      filename: `image_${index + 1}.jpg`, // اسم الملف المرفوع
      content: file.buffer, // المحتوى الخاص بالملف
      encoding: "base64", // الترميز
    })),
  };

  transporter.sendMail(mail_option, (error, info) => {
    if (error) {
      return response
        .status(400)
        .json({ message: "فشل ارسال الرسالة.. رجاء حاول مرة أخري" });
    } else {
      console.log("Email sent:", info);
      // Send a success response or redirect the client
      return response.status(200).json({
        success: true,
        message:
          "تم ارسال رسالتك بنجاح. سيتم الرد عليك في اقرب وقت ممكن. شكرا لك!",
      });
      // response.redirect("/success");
    }
  });
});

app.get("/success", (request, response) => {
  response.send(
    "<h1>تم ارسال رسالتك بنجاح. سيتم الرد عليك في اقرب وقت ممكن. شكرا لك!</h1>"
  );
});

// global middleware for not found router
app.all("*", (req, res) => {
  return res
    .status(404)
    .json({ status: ERROR, message: "this resource is not available" });
});

// global error handler
app.use((error, req, res, next) => {
  res.status(error.code || 400).json({
    status: error.statusText || ERROR,
    message: error.message,
    code: error.code || 400,
  });
});

//start server
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
