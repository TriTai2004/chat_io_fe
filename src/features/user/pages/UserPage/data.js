import {
    FaCalendarAlt,
    FaDesktop,
    FaEnvelope,
    FaGlobe,
    FaLink,
    FaLock,
    FaMapMarkerAlt,
    FaMoon,
    FaPhoneAlt,
    FaPlus,
    FaShieldAlt,
    FaSun,
} from "react-icons/fa";

export const profile = {
    name: "Tri Nguyen",
    username: "@tri.nguyen",
    role: "Product Designer",
    bio: "Designing calm, fast chat experiences with a soft premium feel and clean motion.",
    status: "Online",
    location: "Ho Chi Minh City, Vietnam",
    joinedAt: "Joined March 2023",
    email: "tri.nguyen@chatio.app",
    phone: "+84 912 345 678",
    website: "chatio.app/tri",
    birthday: "14 February",
    language: "Vietnamese / English",
    accent: "linear-gradient(135deg, #38bdf8, #2563eb)",
};

export const stats = [
    { label: "Chats", value: "148", detail: "active across 12 rooms" },
    { label: "Contacts", value: "86", detail: "12 starred favorites" },
    { label: "Response", value: "96%", detail: "avg. reply rate" },
    { label: "Storage", value: "2.4 GB", detail: "media and attachments" },
];

export const activity = [
    {
        title: "Updated profile photo",
        time: "Today, 08:42",
        note: "Replaced the avatar with a newer portrait for better recognition.",
    },
    {
        title: "Changed notification tone",
        time: "Yesterday, 19:18",
        note: "Switched to a softer alert sound for non-work hours.",
    },
    {
        title: "Added trusted device",
        time: "Jun 18, 14:03",
        note: "Approved a new laptop session for easier sign-in.",
    },
    {
        title: "Synced contact card",
        time: "Jun 15, 10:15",
        note: "Uploaded public social links and work profile summary.",
    },
];

export const privacyItems = [
    { label: "Profile visibility", value: "Everyone in workspace" },
    { label: "Last seen", value: "Friends only" },
    { label: "Read receipts", value: "Enabled" },
    { label: "Two-factor auth", value: "On" },
];

export const connectedDevices = [
    { name: "MacBook Pro", meta: "Chrome • Ho Chi Minh City", active: true },
    { name: "iPhone 15", meta: "iOS app • 2 hours ago", active: false },
    { name: "iPad Air", meta: "Safari • 3 days ago", active: false },
];

export const themeOptions = [
    { label: "Dark glass", icon: FaMoon },
    { label: "Soft light", icon: FaSun },
    { label: "Compact mode", icon: FaDesktop },
];

export const quickActions = [
    { label: "Edit details", icon: FaPlus, tone: "primary" },
    { label: "Add social link", icon: FaLink, tone: "secondary" },
];

export const privacyActions = [
    { label: "Security check", icon: FaShieldAlt },
    { label: "Change password", icon: FaLock },
];

export const contactItems = [
    { label: "Email", value: profile.email, icon: FaEnvelope },
    { label: "Phone", value: profile.phone, icon: FaPhoneAlt },
    { label: "Location", value: profile.location, icon: FaMapMarkerAlt },
    { label: "Website", value: profile.website, icon: FaLink },
    { label: "Birthday", value: profile.birthday, icon: FaCalendarAlt },
    { label: "Language", value: profile.language, icon: FaGlobe },
];

