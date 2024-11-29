declare module 'slick-carousel/slick/slick-theme.css';
declare module 'slick-carousel/slick/slick.css';


interface options {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    image: string;
    handler: () => void;
    theme: {
        color: string;
    };
}
export interface Razorpay {
    // add properties and methods that Razorpay object has
    init: (options: options) => void;
    open: () => void;
    // ...
  }

  declare global {
    interface Window {
      Razorpay: Razorpay;
    }
  }