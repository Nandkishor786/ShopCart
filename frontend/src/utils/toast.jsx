import { toast } from "react-toastify";

import {
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaExclamationTriangle,
  FaSpinner,
} from "react-icons/fa";

// SUCCESS
export const successToast = (message) => {
  toast.success(message, {
    icon: <FaCheckCircle color="#22C55E" size={22} />,

    style: {
      background: "#ECFDF3",

      color: "#111827",
      border: "1px solid #22C55E",
      borderRadius: "6px",
      padding: "4px 12px",
      fontSize: "15px",
      fontWeight: "600",
    },
  });
};

// ERROR
export const errorToast = (message) => {
  toast.error(message, {
    icon: <FaTimesCircle color="#EF4444" size={22} />,

    style: {
      background: "#FEF2F2",

      color: "#111827",

      border: "1px solid #EF4444",

      borderRadius: "6px",

      padding: "4px 12px",

      boxShadow: "0 8px 20px rgba(239,68,68,0.12)",

      fontWeight: "600",
    },
  });
};

// WARNING
export const warningToast = (message) => {
  toast.warning(message, {
    icon: <FaExclamationTriangle color="#F59E0B" size={22} />,

    style: {
      background: "#FFFBEB",

      color: "#111827",

      border: "1px solid #F59E0B",

      borderRadius: "6px",

      padding: "4px 12px",

      boxShadow: "0 8px 20px rgba(245,158,11,0.12)",

      fontWeight: "600",
    },
  });
};

// INFO
export const infoToast = (message) => {
  toast.info(message, {
    icon: <FaInfoCircle color="#3B82F6" size={22} />,

    style: {
      background: "#EFF6FF",

      color: "#111827",

      border: "1px solid #3B82F6",

      borderRadius: "6px",

      padding: "4px 12px",

      boxShadow: "0 8px 20px rgba(59,130,246,0.12)",

      fontWeight: "600",
    },
  });
};

// LOADING
export const loadingToast = (message) => {
  return toast.loading(message, {
    icon: <FaSpinner className="animate-spin" color="#8B5CF6" size={22} />,

    style: {
      background: "#F5F3FF",

      color: "#111827",

      border: "1px solid #8B5CF6",

      borderRadius: "6px",

      padding: "4px 12px",

      boxShadow: "0 8px 20px rgba(139,92,246,0.12)",

      fontWeight: "600",
    },
  });
};
