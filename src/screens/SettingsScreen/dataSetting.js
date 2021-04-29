import password from '../../assets/icon-setting/password.png';
import call from '../../assets/icon-setting/Call.png';
import bar_grap from '../../assets/icon-setting/Bar-Grap.png';
import filter from '../../assets/icon-setting/Filter.png';
import notification from '../../assets/icon-setting/Notifications.png';
import privacy from '../../assets/icon-setting/Privacy.png';
import update from '../../assets/icon-setting/Update.png';
import web from '../../assets/icon-setting/Web.png';
import terms_conditions from '../../assets/icon-setting/Terms-Conditions.png';
import logout from '../../assets/icon-setting/Log-Out.png';

export default data = [
    {
        title: 'Change Password',
        imageSource: password
    },
    {
        title: 'Preferences',
        imageSource: filter
    },
    {
        title: 'Notifications',
        routeName: 'NotificationSetting',
        imageSource: notification
    },
    {
        title: 'Data Use',
        imageSource: bar_grap
    },
    {
        title: 'Language',
        imageSource: web
    },
    {
        title: 'Check Update',
        imageSource: update
    },
    {
        title: 'Contact Us',
        imageSource: call
    },
    {
        title: 'Privacy Policy',
        imageSource: privacy
    },
    {
        title: 'Terms & Conditions',
        imageSource: terms_conditions
    },
    {
        title: 'Logout',
        imageSource: logout
    },
];