"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Autocomplete,
} from "@mui/material";
import { CalendarToday, Close } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import { blogPosts } from "../../data/blogs";

const FormContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1300,
}));

const FormBox = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  maxWidth: 600,
  width: "95%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
    maxWidth: "90%",
  },
}));

export default function UserForm({ onComplete, onClose, isOpen = true }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    country: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [age, setAge] = useState("");
  const [dobError, setDobError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [countdown, setCountdown] = useState(10);

  const countries = {
    AD: { name: "Andorra", code: "+376", length: 6, flag: "🇦🇩" },
    AE: { name: "UAE", code: "+971", length: 9, flag: "🇦🇪" },
    AF: { name: "Afghanistan", code: "+93", length: 9, flag: "🇦🇫" },
    AG: { name: "Antigua and Barbuda", code: "+1", length: 10, flag: "🇦🇬" },
    AI: { name: "Anguilla", code: "+1", length: 10, flag: "🇦🇮" },
    AL: { name: "Albania", code: "+355", length: 9, flag: "🇦🇱" },
    AM: { name: "Armenia", code: "+374", length: 8, flag: "🇦🇲" },
    AO: { name: "Angola", code: "+244", length: 9, flag: "🇦🇴" },
    AR: { name: "Argentina", code: "+54", length: 10, flag: "🇦🇷" },
    AS: { name: "American Samoa", code: "+1", length: 10, flag: "🇦🇸" },
    AT: { name: "Austria", code: "+43", length: 11, flag: "🇦🇹" },
    AU: { name: "Australia", code: "+61", length: 9, flag: "🇦🇺" },
    AW: { name: "Aruba", code: "+297", length: 7, flag: "🇦🇼" },
    AZ: { name: "Azerbaijan", code: "+994", length: 9, flag: "🇦🇿" },
    BA: { name: "Bosnia and Herzegovina", code: "+387", length: 8, flag: "🇧🇦" },
    BB: { name: "Barbados", code: "+1", length: 10, flag: "🇧🇧" },
    BD: { name: "Bangladesh", code: "+880", length: 10, flag: "🇧🇩" },
    BE: { name: "Belgium", code: "+32", length: 9, flag: "🇧🇪" },
    BF: { name: "Burkina Faso", code: "+226", length: 8, flag: "🇧🇫" },
    BG: { name: "Bulgaria", code: "+359", length: 9, flag: "🇧🇬" },
    BH: { name: "Bahrain", code: "+973", length: 8, flag: "🇧🇭" },
    BI: { name: "Burundi", code: "+257", length: 8, flag: "🇧🇮" },
    BJ: { name: "Benin", code: "+229", length: 8, flag: "🇧🇯" },
    BM: { name: "Bermuda", code: "+1", length: 10, flag: "🇧🇲" },
    BN: { name: "Brunei", code: "+673", length: 7, flag: "🇧🇳" },
    BO: { name: "Bolivia", code: "+591", length: 8, flag: "🇧🇴" },
    BR: { name: "Brazil", code: "+55", length: 11, flag: "🇧🇷" },
    BS: { name: "Bahamas", code: "+1", length: 10, flag: "🇧🇸" },
    BT: { name: "Bhutan", code: "+975", length: 8, flag: "🇧🇹" },
    BW: { name: "Botswana", code: "+267", length: 8, flag: "🇧🇼" },
    BY: { name: "Belarus", code: "+375", length: 9, flag: "🇧🇾" },
    BZ: { name: "Belize", code: "+501", length: 7, flag: "🇧🇿" },
    CA: { name: "Canada", code: "+1", length: 10, flag: "🇨🇦" },
    CD: { name: "DR Congo", code: "+243", length: 9, flag: "🇨🇩" },
    CF: {
      name: "Central African Republic",
      code: "+236",
      length: 8,
      flag: "🇨🇫",
    },
    CG: { name: "Congo", code: "+242", length: 9, flag: "🇨🇬" },
    CH: { name: "Switzerland", code: "+41", length: 9, flag: "🇨🇭" },
    CI: { name: "Ivory Coast", code: "+225", length: 10, flag: "🇨🇮" },
    CK: { name: "Cook Islands", code: "+682", length: 5, flag: "🇨🇰" },
    CL: { name: "Chile", code: "+56", length: 9, flag: "🇨🇱" },
    CM: { name: "Cameroon", code: "+237", length: 9, flag: "🇨🇲" },
    CN: { name: "China", code: "+86", length: 11, flag: "🇨🇳" },
    CO: { name: "Colombia", code: "+57", length: 10, flag: "🇨🇴" },
    CR: { name: "Costa Rica", code: "+506", length: 8, flag: "🇨🇷" },
    CU: { name: "Cuba", code: "+53", length: 8, flag: "🇨🇺" },
    CV: { name: "Cape Verde", code: "+238", length: 7, flag: "🇨🇻" },
    CY: { name: "Cyprus", code: "+357", length: 8, flag: "🇨🇾" },
    CZ: { name: "Czech Republic", code: "+420", length: 9, flag: "🇨🇿" },
    DE: { name: "Germany", code: "+49", length: 11, flag: "🇩🇪" },
    DJ: { name: "Djibouti", code: "+253", length: 8, flag: "🇩🇯" },
    DK: { name: "Denmark", code: "+45", length: 8, flag: "🇩🇰" },
    DM: { name: "Dominica", code: "+1", length: 10, flag: "🇩🇲" },
    DO: { name: "Dominican Republic", code: "+1", length: 10, flag: "🇩🇴" },
    DZ: { name: "Algeria", code: "+213", length: 9, flag: "🇩🇿" },
    EC: { name: "Ecuador", code: "+593", length: 9, flag: "🇪🇨" },
    EE: { name: "Estonia", code: "+372", length: 8, flag: "🇪🇪" },
    EG: { name: "Egypt", code: "+20", length: 10, flag: "🇪🇬" },
    ER: { name: "Eritrea", code: "+291", length: 7, flag: "🇪🇷" },
    ES: { name: "Spain", code: "+34", length: 9, flag: "🇪🇸" },
    ET: { name: "Ethiopia", code: "+251", length: 9, flag: "🇪🇹" },
    FI: { name: "Finland", code: "+358", length: 10, flag: "🇫🇮" },
    FJ: { name: "Fiji", code: "+679", length: 7, flag: "🇫🇯" },
    FK: { name: "Falkland Islands", code: "+500", length: 5, flag: "🇫🇰" },
    FM: { name: "Micronesia", code: "+691", length: 7, flag: "🇫🇲" },
    FO: { name: "Faroe Islands", code: "+298", length: 6, flag: "🇫🇴" },
    FR: { name: "France", code: "+33", length: 10, flag: "🇫🇷" },
    GA: { name: "Gabon", code: "+241", length: 8, flag: "🇬🇦" },
    GB: { name: "UK", code: "+44", length: 10, flag: "🇬🇧" },
    GD: { name: "Grenada", code: "+1", length: 10, flag: "🇬🇩" },
    GE: { name: "Georgia", code: "+995", length: 9, flag: "🇬🇪" },
    GF: { name: "French Guiana", code: "+594", length: 9, flag: "🇬🇫" },
    GH: { name: "Ghana", code: "+233", length: 9, flag: "🇬🇭" },
    GI: { name: "Gibraltar", code: "+350", length: 8, flag: "🇬🇮" },
    GL: { name: "Greenland", code: "+299", length: 6, flag: "🇬🇱" },
    GM: { name: "Gambia", code: "+220", length: 7, flag: "🇬🇲" },
    GN: { name: "Guinea", code: "+224", length: 9, flag: "🇬🇳" },
    GP: { name: "Guadeloupe", code: "+590", length: 9, flag: "🇬🇵" },
    GQ: { name: "Equatorial Guinea", code: "+240", length: 9, flag: "🇬🇶" },
    GR: { name: "Greece", code: "+30", length: 10, flag: "🇬🇷" },
    GT: { name: "Guatemala", code: "+502", length: 8, flag: "🇬🇹" },
    GU: { name: "Guam", code: "+1", length: 10, flag: "🇬🇺" },
    GW: { name: "Guinea-Bissau", code: "+245", length: 7, flag: "🇬🇼" },
    GY: { name: "Guyana", code: "+592", length: 7, flag: "🇬🇾" },
    HK: { name: "Hong Kong", code: "+852", length: 8, flag: "🇭🇰" },
    HN: { name: "Honduras", code: "+504", length: 8, flag: "🇭🇳" },
    HR: { name: "Croatia", code: "+385", length: 9, flag: "🇭🇷" },
    HT: { name: "Haiti", code: "+509", length: 8, flag: "🇭🇹" },
    HU: { name: "Hungary", code: "+36", length: 9, flag: "🇭🇺" },
    ID: { name: "Indonesia", code: "+62", length: 11, flag: "🇮🇩" },
    IE: { name: "Ireland", code: "+353", length: 9, flag: "🇮🇪" },
    IL: { name: "Israel", code: "+972", length: 9, flag: "🇮🇱" },
    IM: { name: "Isle of Man", code: "+44", length: 10, flag: "🇮🇲" },
    IN: { name: "India", code: "+91", length: 10, flag: "🇮🇳" },
    IO: {
      name: "British Indian Ocean Territory",
      code: "+246",
      length: 7,
      flag: "🇮🇴",
    },
    IQ: { name: "Iraq", code: "+964", length: 10, flag: "🇮🇶" },
    IR: { name: "Iran", code: "+98", length: 10, flag: "🇮🇷" },
    IS: { name: "Iceland", code: "+354", length: 7, flag: "🇮🇸" },
    IT: { name: "Italy", code: "+39", length: 10, flag: "🇮🇹" },
    JE: { name: "Jersey", code: "+44", length: 10, flag: "🇯🇪" },
    JM: { name: "Jamaica", code: "+1", length: 10, flag: "🇯🇲" },
    JO: { name: "Jordan", code: "+962", length: 9, flag: "🇯🇴" },
    JP: { name: "Japan", code: "+81", length: 11, flag: "🇯🇵" },
    KE: { name: "Kenya", code: "+254", length: 9, flag: "🇰🇪" },
    KG: { name: "Kyrgyzstan", code: "+996", length: 9, flag: "🇰🇬" },
    KH: { name: "Cambodia", code: "+855", length: 9, flag: "🇰🇭" },
    KI: { name: "Kiribati", code: "+686", length: 8, flag: "🇰🇮" },
    KM: { name: "Comoros", code: "+269", length: 7, flag: "🇰🇲" },
    KN: { name: "Saint Kitts and Nevis", code: "+1", length: 10, flag: "🇰🇳" },
    KP: { name: "North Korea", code: "+850", length: 10, flag: "🇰🇵" },
    KR: { name: "South Korea", code: "+82", length: 11, flag: "🇰🇷" },
    KW: { name: "Kuwait", code: "+965", length: 8, flag: "🇰🇼" },
    KY: { name: "Cayman Islands", code: "+1", length: 10, flag: "🇰🇾" },
    KZ: { name: "Kazakhstan", code: "+7", length: 10, flag: "🇰🇿" },
    LA: { name: "Laos", code: "+856", length: 10, flag: "🇱🇦" },
    LB: { name: "Lebanon", code: "+961", length: 8, flag: "🇱🇧" },
    LC: { name: "Saint Lucia", code: "+1", length: 10, flag: "🇱🇨" },
    LI: { name: "Liechtenstein", code: "+423", length: 7, flag: "🇱🇮" },
    LK: { name: "Sri Lanka", code: "+94", length: 9, flag: "🇱🇰" },
    LR: { name: "Liberia", code: "+231", length: 8, flag: "🇱🇷" },
    LS: { name: "Lesotho", code: "+266", length: 8, flag: "🇱🇸" },
    LT: { name: "Lithuania", code: "+370", length: 8, flag: "🇱🇹" },
    LU: { name: "Luxembourg", code: "+352", length: 9, flag: "🇱🇺" },
    LV: { name: "Latvia", code: "+371", length: 8, flag: "🇱🇻" },
    LY: { name: "Libya", code: "+218", length: 9, flag: "🇱🇾" },
    MA: { name: "Morocco", code: "+212", length: 9, flag: "🇲🇦" },
    MC: { name: "Monaco", code: "+377", length: 8, flag: "🇲🇨" },
    MD: { name: "Moldova", code: "+373", length: 8, flag: "🇲🇩" },
    ME: { name: "Montenegro", code: "+382", length: 8, flag: "🇲🇪" },
    MF: { name: "Saint Martin", code: "+590", length: 9, flag: "🇲🇫" },
    MG: { name: "Madagascar", code: "+261", length: 9, flag: "🇲🇬" },
    MH: { name: "Marshall Islands", code: "+692", length: 7, flag: "🇲🇭" },
    MK: { name: "North Macedonia", code: "+389", length: 8, flag: "🇲🇰" },
    ML: { name: "Mali", code: "+223", length: 8, flag: "🇲🇱" },
    MM: { name: "Myanmar", code: "+95", length: 9, flag: "🇲🇲" },
    MN: { name: "Mongolia", code: "+976", length: 8, flag: "🇲🇳" },
    MO: { name: "Macau", code: "+853", length: 8, flag: "🇲🇴" },
    MP: {
      name: "Northern Mariana Islands",
      code: "+1",
      length: 10,
      flag: "🇲🇵",
    },
    MQ: { name: "Martinique", code: "+596", length: 9, flag: "🇲🇶" },
    MR: { name: "Mauritania", code: "+222", length: 8, flag: "🇲🇷" },
    MS: { name: "Montserrat", code: "+1", length: 10, flag: "🇲🇸" },
    MT: { name: "Malta", code: "+356", length: 8, flag: "🇲🇹" },
    MU: { name: "Mauritius", code: "+230", length: 8, flag: "🇲🇺" },
    MV: { name: "Maldives", code: "+960", length: 7, flag: "🇲🇻" },
    MW: { name: "Malawi", code: "+265", length: 9, flag: "🇲🇼" },
    MX: { name: "Mexico", code: "+52", length: 10, flag: "🇲🇽" },
    MY: { name: "Malaysia", code: "+60", length: 10, flag: "🇲🇾" },
    MZ: { name: "Mozambique", code: "+258", length: 9, flag: "🇲🇿" },
    NA: { name: "Namibia", code: "+264", length: 9, flag: "🇳🇦" },
    NC: { name: "New Caledonia", code: "+687", length: 6, flag: "🇳🇨" },
    NE: { name: "Niger", code: "+227", length: 8, flag: "🇳🇪" },
    NF: { name: "Norfolk Island", code: "+672", length: 6, flag: "🇳🇫" },
    NG: { name: "Nigeria", code: "+234", length: 10, flag: "🇳🇬" },
    NI: { name: "Nicaragua", code: "+505", length: 8, flag: "🇳🇮" },
    NL: { name: "Netherlands", code: "+31", length: 9, flag: "🇳🇱" },
    NO: { name: "Norway", code: "+47", length: 8, flag: "🇳🇴" },
    NP: { name: "Nepal", code: "+977", length: 10, flag: "🇳🇵" },
    NR: { name: "Nauru", code: "+674", length: 7, flag: "🇳🇷" },
    NU: { name: "Niue", code: "+683", length: 4, flag: "🇳🇺" },
    NZ: { name: "New Zealand", code: "+64", length: 9, flag: "🇳🇿" },
    OM: { name: "Oman", code: "+968", length: 8, flag: "🇴🇲" },
    PA: { name: "Panama", code: "+507", length: 8, flag: "🇵🇦" },
    PE: { name: "Peru", code: "+51", length: 9, flag: "🇵🇪" },
    PF: { name: "French Polynesia", code: "+689", length: 8, flag: "🇵🇫" },
    PG: { name: "Papua New Guinea", code: "+675", length: 8, flag: "🇵🇬" },
    PH: { name: "Philippines", code: "+63", length: 10, flag: "🇵🇭" },
    PL: { name: "Poland", code: "+48", length: 9, flag: "🇵🇱" },
    PM: {
      name: "Saint Pierre and Miquelon",
      code: "+508",
      length: 6,
      flag: "🇵🇲",
    },
    PR: { name: "Puerto Rico", code: "+1", length: 10, flag: "🇵🇷" },
    PS: { name: "Palestine", code: "+970", length: 9, flag: "🇵🇸" },
    PT: { name: "Portugal", code: "+351", length: 9, flag: "🇵🇹" },
    PW: { name: "Palau", code: "+680", length: 7, flag: "🇵🇼" },
    PY: { name: "Paraguay", code: "+595", length: 9, flag: "🇵🇾" },
    QA: { name: "Qatar", code: "+974", length: 8, flag: "🇶🇦" },
    RE: { name: "Réunion", code: "+262", length: 9, flag: "🇷🇪" },
    RO: { name: "Romania", code: "+40", length: 9, flag: "🇷🇴" },
    RS: { name: "Serbia", code: "+381", length: 9, flag: "🇷🇸" },
    RU: { name: "Russia", code: "+7", length: 10, flag: "🇷🇺" },
    RW: { name: "Rwanda", code: "+250", length: 9, flag: "🇷🇼" },
    SA: { name: "Saudi Arabia", code: "+966", length: 9, flag: "🇸🇦" },
    SB: { name: "Solomon Islands", code: "+677", length: 7, flag: "🇸🇧" },
    SC: { name: "Seychelles", code: "+248", length: 7, flag: "🇸🇨" },
    SD: { name: "Sudan", code: "+249", length: 9, flag: "🇸🇩" },
    SE: { name: "Sweden", code: "+46", length: 9, flag: "🇸🇪" },
    SG: { name: "Singapore", code: "+65", length: 8, flag: "🇸🇬" },
    SH: { name: "Saint Helena", code: "+290", length: 4, flag: "🇸🇭" },
    SI: { name: "Slovenia", code: "+386", length: 8, flag: "🇸🇮" },
    SK: { name: "Slovakia", code: "+421", length: 9, flag: "🇸🇰" },
    SL: { name: "Sierra Leone", code: "+232", length: 8, flag: "🇸🇱" },
    SM: { name: "San Marino", code: "+378", length: 10, flag: "🇸🇲" },
    SN: { name: "Senegal", code: "+221", length: 9, flag: "🇸🇳" },
    SO: { name: "Somalia", code: "+252", length: 8, flag: "🇸🇴" },
    SR: { name: "Suriname", code: "+597", length: 7, flag: "🇸🇷" },
    SS: { name: "South Sudan", code: "+211", length: 9, flag: "🇸🇸" },
    ST: { name: "São Tomé and Príncipe", code: "+239", length: 7, flag: "🇸🇹" },
    SV: { name: "El Salvador", code: "+503", length: 8, flag: "🇸🇻" },
    SX: { name: "Sint Maarten", code: "+1", length: 10, flag: "🇸🇽" },
    SY: { name: "Syria", code: "+963", length: 9, flag: "🇸🇾" },
    SZ: { name: "Eswatini", code: "+268", length: 8, flag: "🇸🇿" },
    TC: {
      name: "Turks and Caicos Islands",
      code: "+1",
      length: 10,
      flag: "🇹🇨",
    },
    TD: { name: "Chad", code: "+235", length: 8, flag: "🇹🇩" },
    TG: { name: "Togo", code: "+228", length: 8, flag: "🇹🇬" },
    TH: { name: "Thailand", code: "+66", length: 9, flag: "🇹🇭" },
    TJ: { name: "Tajikistan", code: "+992", length: 9, flag: "🇹🇯" },
    TK: { name: "Tokelau", code: "+690", length: 4, flag: "🇹🇰" },
    TL: { name: "East Timor", code: "+670", length: 8, flag: "🇹🇱" },
    TM: { name: "Turkmenistan", code: "+993", length: 8, flag: "🇹🇲" },
    TN: { name: "Tunisia", code: "+216", length: 8, flag: "🇹🇳" },
    TO: { name: "Tonga", code: "+676", length: 5, flag: "🇹🇴" },
    TR: { name: "Turkey", code: "+90", length: 10, flag: "🇹🇷" },
    TT: { name: "Trinidad and Tobago", code: "+1", length: 10, flag: "🇹🇹" },
    TV: { name: "Tuvalu", code: "+688", length: 5, flag: "🇹🇻" },
    TW: { name: "Taiwan", code: "+886", length: 9, flag: "🇹🇼" },
    TZ: { name: "Tanzania", code: "+255", length: 9, flag: "🇹🇿" },
    UA: { name: "Ukraine", code: "+380", length: 9, flag: "🇺🇦" },
    UG: { name: "Uganda", code: "+256", length: 9, flag: "🇺🇬" },
    US: { name: "USA", code: "+1", length: 10, flag: "🇺🇸" },
    UY: { name: "Uruguay", code: "+598", length: 8, flag: "🇺🇾" },
    UZ: { name: "Uzbekistan", code: "+998", length: 9, flag: "🇺🇿" },
    VA: { name: "Vatican City", code: "+39", length: 10, flag: "🇻🇦" },
    VC: {
      name: "Saint Vincent and the Grenadines",
      code: "+1",
      length: 10,
      flag: "🇻🇨",
    },
    VE: { name: "Venezuela", code: "+58", length: 10, flag: "🇻🇪" },
    VG: { name: "British Virgin Islands", code: "+1", length: 10, flag: "🇻🇬" },
    VI: { name: "US Virgin Islands", code: "+1", length: 10, flag: "🇻🇮" },
    VN: { name: "Vietnam", code: "+84", length: 9, flag: "🇻🇳" },
    VU: { name: "Vanuatu", code: "+678", length: 7, flag: "🇻🇺" },
    WF: { name: "Wallis and Futuna", code: "+681", length: 6, flag: "🇼🇫" },
    WS: { name: "Samoa", code: "+685", length: 7, flag: "🇼🇸" },
    YE: { name: "Yemen", code: "+967", length: 9, flag: "🇾🇪" },
    YT: { name: "Mayotte", code: "+262", length: 9, flag: "🇾🇹" },
    ZA: { name: "South Africa", code: "+27", length: 9, flag: "🇿🇦" },
    ZM: { name: "Zambia", code: "+260", length: 9, flag: "🇿🇲" },
    ZW: { name: "Zimbabwe", code: "+263", length: 9, flag: "🇿🇼" },
  };

  const handleChange = (field) => (event) => {
    let value = event.target.value;

    if (field === "phone" && formData.country && countries[formData.country]) {
      value = value.replace(/\D/g, "");
      const maxLength = countries[formData.country].length;
      if (value.length > maxLength) {
        value = value.substring(0, maxLength);
      }

      if (value.length > 0 && value.length !== maxLength) {
        setPhoneError(`Phone number must be ${maxLength} digits`);
      } else {
        setPhoneError("");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCountryChange = (event) => {
    const newCountry = event.target.value;
    setFormData((prev) => ({
      ...prev,
      country: newCountry,
      phone: "",
    }));
    setPhoneError("");
  };

  const handleDateChange = (date) => {
    if (date) {
      const today = dayjs();

      if (date.isAfter(today)) {
        setDobError("Future date is not allowed");
        setAge("");
      } else {
        setDobError("");
        const calculatedAge = today.diff(date, "year");
        setAge(calculatedAge.toString());
      }

      setFormData((prev) => ({
        ...prev,
        dob: date.format("YYYY-MM-DD"),
      }));
    } else {
      setDobError("");
      setAge("");
      setFormData((prev) => ({
        ...prev,
        dob: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.country || !countries[formData.country]) return;
    const phoneLength = countries[formData.country].length;
    if (
      formData.name &&
      formData.phone &&
      formData.email &&
      formData.dob &&
      !dobError &&
      !phoneError &&
      formData.phone.length === phoneLength
    ) {
      // Log user data to console
      const userData = {
        name: formData.name,
        countryCode: countries[formData.country].code,
        phone: formData.phone,
        email: formData.email,
        dateOfBirth: formData.dob,
        age: age,
        country: countries[formData.country].name,
      };
      console.log("User Registration Data:", userData);

      // Close form and let parent handle popup
      if (onClose) onClose();
      if (onComplete) onComplete();
    }
  };

  return (
    <>
      {isOpen && (
        <FormContainer>
          <FormBox component="form" onSubmit={handleSubmit}>
            <IconButton
              onClick={onClose}
              sx={{ position: "absolute", top: 8, right: 8, color: "grey.600" }}
            >
              <Close />
            </IconButton>
            <Typography variant="h5" textAlign="center" mb={2}>
              Complete Your Registration
            </Typography>

            <TextField
              label="Full Name"
              value={formData.name}
              onChange={handleChange("name")}
              required
              fullWidth
            />

            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Autocomplete
                sx={{ minWidth: { xs: "100%", sm: 180 } }}
                options={Object.entries(countries).map(
                  ([countryCode, country]) => ({
                    id: countryCode,
                    code: countryCode,
                    ...country,
                  })
                )}
                value={
                  formData.country
                    ? {
                        id: formData.country,
                        code: formData.country,
                        ...countries[formData.country],
                      }
                    : null
                }
                onChange={(event, newValue) => {
                  const countryCode = newValue ? newValue.id : "";
                  setFormData((prev) => ({
                    ...prev,
                    country: countryCode,
                    phone: "",
                  }));
                  setPhoneError("");
                }}
                getOptionLabel={(option) => option.code || ""}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderOption={(props, option) => (
                  <Box component="li" {...props} key={option.id}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <span>{option.flag}</span>
                      <span>{option.code}</span>
                    </Box>
                  </Box>
                )}
                renderInput={(params) => {
                  const selectedCountry = formData.country
                    ? countries[formData.country]
                    : null;
                  return (
                    <TextField
                      {...params}
                      label="Country Code"
                      required
                      placeholder="Type to search..."
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: selectedCountry ? (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mr: 1,
                            }}
                          >
                            {selectedCountry.flag}
                          </Box>
                        ) : null,
                      }}
                    />
                  );
                }}
                ListboxProps={{
                  style: { zIndex: 1400, maxHeight: 200 },
                }}
              />

              <TextField
                label={
                  formData.country && countries[formData.country]
                    ? `Phone Number (${countries[formData.country].code})`
                    : "Phone Number"
                }
                value={formData.phone}
                onChange={handleChange("phone")}
                required
                fullWidth
                disabled={!formData.country}
                error={!!phoneError}
                helperText={
                  phoneError ||
                  (formData.country && countries[formData.country]
                    ? `Enter ${countries[formData.country].length} digits`
                    : "Select country first")
                }
                inputProps={{
                  maxLength:
                    formData.country && countries[formData.country]
                      ? countries[formData.country].length
                      : 15,
                  pattern: "[0-9]*",
                  inputMode: "numeric",
                }}
              />
            </Box>

            <TextField
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              required
              fullWidth
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  label="Date of Birth"
                  value={formData.dob ? dayjs(formData.dob) : null}
                  onChange={handleDateChange}
                  maxDate={dayjs()}
                  format="DD/MM/YYYY"
                  openTo="year"
                  slots={{
                    openPickerIcon: CalendarToday,
                  }}
                  slotProps={{
                    textField: {
                      required: true,
                      fullWidth: true,
                      error: !!dobError,
                      helperText: dobError,
                      InputProps: {
                        readOnly: true,
                      },
                    },
                    dialog: {
                      sx: {
                        zIndex: 1500,
                      },
                    },
                  }}
                />
              </LocalizationProvider>
              {age && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Age: {age} years
                </Typography>
              )}
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={
                !formData.name ||
                !formData.phone ||
                !formData.email ||
                !formData.dob ||
                !!dobError ||
                !!phoneError ||
                (formData.country &&
                  countries[formData.country] &&
                  formData.phone.length !== countries[formData.country].length)
              }
            >
              Submit
            </Button>
          </FormBox>
        </FormContainer>
      )}

      <Dialog open={showPopup} maxWidth="sm" fullWidth>
        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          <Typography variant="h6" color="success.main" gutterBottom>
            ✅ Registration Successful!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Link will be sent to you via mail. Check your mail!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Redirecting to blogs in {countdown} seconds...
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
