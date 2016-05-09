$(function () {

    var html = $('#test').html();
    var profileData = [
    {
        profileName: 'Чернявская Алёна Викторовна',
        profileImg: 'img/foto.jpg',
        profileText: 'Менеджер ВЭД',
        profileFrontQuestion: 'Хочу учить фронтенд, потому что:',
        profileFrontAnswer: [
            'ИТ-отрасль быстро развивается', 'Это интересно!', 'Хорошо платят'
        ],
        profilePhoneTitle: 'Мой контактный телефон',
        profilePhone: '+380665032524',
        profileVkTitle: 'Мой профиль вконтакте',
        profileVK: 'http://vk.com',
        profileFeedbackTitle: 'Мой фидбек: ',
        profileFeedback: 'Счастья вам =)'
    }];

    var content = tmpl(html, {
        data: profileData
    });

    $('body').append(content);
})