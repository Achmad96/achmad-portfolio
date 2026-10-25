import { toast, type ExternalToast } from "sonner";

export type AlertType = "success" | "error" | "info";

const AlertConfigs: ExternalToast = {
  duration: 3000,
  position: "top-center",
};

const alert = {
  success: (message: string, options?: ExternalToast) => {
    toast.success(message, {
      ...options,
      duration: options?.duration || AlertConfigs.duration,
      position: options?.position || AlertConfigs.position,
    });
  },
  error: (message: string, options?: ExternalToast) => {
    toast.error(message, {
      ...options,
      duration: options?.duration || AlertConfigs.duration,
      position: options?.position || AlertConfigs.position,
    });
  },
  info: (message: string, options?: ExternalToast) => {
    toast.info(message, {
      ...options,
      duration: options?.duration || AlertConfigs.duration,
      position: options?.position || AlertConfigs.position,
    });
  },
};
export default alert;
