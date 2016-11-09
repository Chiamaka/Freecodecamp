$(document).ready(() => {
  //functionality for the filters
  $('.online-btn').on('click', () => {
    $('.card').show();
    $('.card#offline').hide();
  });

  $('.offline-btn').on('click', () => {
    $('.card').show();
    $('.card#online').hide();
  });

  $('.all-btn').on('click', () => {
    $('.card').show();
  });


  //getting JSON data from TwitchTV API
  //TwitchTV users array
  let users = ['freecodecamp'/*, 'c9sneaky', 'nadeshot', 'formal'*/];
  //Step 1: Send GET request to /streams/ endpoint to know if the user is currently streaming or not.
  users.forEach((user) => {
    console.log(user);
    $.ajax({
      url: `https://wind-bow.hyperdev.space/twitch-api/streams/${user}`,
      type: 'GET',
      dataType: 'jsonp',
      success: (data) => {
        if(data.stream === null) {
          console.log('currently offline');
          offline(data, user);
        } else {
          console.log('currently online');
          showOnlineData(data);
        }
      },
      error: () => {
        console.log('error getting data from API. Please try again');
      }
    });
  });

  function offline(data, user){
    $.ajax({
      url: `https://wind-bow.hyperdev.space/twitch-api/channels/${user}`,
      type: 'GET',
      dataType: 'jsonp',
      success: (data) => {
        showOfflineData(data);
      },
      error: () => {
        console.log('error getting data from API. Please try again');
      }
    });
  }

  function showOnlineData(data) {
    let logo = data.stream.channel.logo;
    let name = data.stream.channel.display_name;
    let followers = data.stream.channel.followers;
    let url = data.stream.channel.url;
    let createdAt = new Date(data.stream.channel.created_at).getFullYear();
    let game = data.stream.game;
    constructCard('online',logo, name, followers, url, created, game);
  }

  function showOfflineData(data) {
    let logo = data.logo;
    let name = data.display_name;
    let followers = data.followers;
    let url = data.url;
    let created = new Date(data.created_at).getFullYear();
    constructCard('offline', logo, name, followers, url, created);
  }

  function constructCard(status, logo, name, followers, url, created, game) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let span3 = document.createElement('span');
    let i = document.createElement('i');
    let a = document.createElement('a');
    let divCard = $(div).clone();
    (status === 'online')? $(divCard).addClass('card').attr('id', 'online') : $(divCard).addClass('card').attr('id', 'offline');

    let imageDiv = $(div).clone();
    $(imageDiv).addClass('image');
    $(img).attr('src', 'https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg');
    $(imageDiv).append(img);

    let contentDiv = $(div).clone();
    $(contentDiv).addClass('content');

    console.log(url);
    $(a).attr('href', url).attr('target', '_blank').text('freecodecamp'); //name of the twitch tv user;
    $(contentDiv).append(a);

    let streamingDiv = $(div).clone();
    if(status === 'online') {
      $(streamingDiv).addClass('streaming');
      $(span3).text(game);
      $(streamingDiv).append(span3).prepend('Streaming: ');
      $(contentDiv).append(streamingDiv);
    }

    let extraContentDiv = $(div).clone();
    $(extraContentDiv).addClass('extra content');
    $(span1).addClass('right floated').text(`Joined in ${created}`);
    $(i).addClass('unhide icon');
    $(span2).append(i)
            .append(`${followers} Followers`);

    $(extraContentDiv).append(span1)
                      .append(span2);

    // $(a).attr('href', url).append(divCard);
    $(divCard).append(imageDiv);
    $(divCard).append(contentDiv);
    $(divCard).append(extraContentDiv);
    $(divCard).appendTo($('.cards'));
    // console.log(a);
  }

  constructCard('online', '', 'freecodecamp', 23334, 'http://www.google.com', 2012, 'javascript coding');
});
