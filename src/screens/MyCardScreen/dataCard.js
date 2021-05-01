import apple from '../../assets/payment-option/apple.png';
import google from '../../assets/payment-option/google.png';
import master_card from '../../assets/payment-option/master_card.png';
import paypal from '../../assets/payment-option/paypal.png';
import visa from '../../assets/payment-option/visa.png';

export const dataCard = [
    {
        title: '',
        data: [
            {
                title: 'Master Card',
                imageSource: master_card,
                isSelected: true,
            },
            {
                title: 'Google Pay',
                imageSource: google,
                isSelected: false,
            }
        ]
    },
    {
        title: 'Add new card',
        data: [
            {
                title: 'Apple Pay',
                imageSource: apple,
                isSelected: true,
            },
            {
                title: 'Visa',
                imageSource: visa,
                isSelected: false,
            },
            {
                title: 'Paypal',
                imageSource: paypal,
                isSelected: false,
            },
            {
                title: 'Master Card',
                imageSource: master_card,
                isSelected: false,
            },
            {
                title: 'Google Pay',
                imageSource: google,
                isSelected: false,
            }
        ]
    }
];
