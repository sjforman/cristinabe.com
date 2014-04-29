var images = [
'BBB_Lehigh_4.jpg',
'BBB_Lehigh_1.jpg',
'BBB_Lehigh_2.jpg',
'BBB_Lehigh_3.jpg',
'BBB_NoMA_1.jpg',
'BBB_NoMA_2.jpg',
'BBB_NMAH_FFandE_1.jpg',
'BBB_NMAH_FFandE_2.jpg',
'BBB_FourMileRun_1.jpg',
'BBB_FourMileRun_2.jpg',
'BBB_FourMileRun_3.jpg',
'BBB_FourMileRun_4.jpg',
'BBB_FL_NewRiverMasterPlan_1.jpg',
'BBB_FL_NewRiverMasterPlan_2.jpg',
'BBB_FL_NewRiverMasterPlan_3.jpg',
'BBB_FL_ArtsDistrict_PublicMeeting.jpg',
'CB_SeametreySchool.jpg'
];

var NUM_IMG = images.length;

$( document ).ready(function( ) {

  $('#fullpage').fullpage({
        slidesColor : ['#243743', '#fff'],
});

  for (var i = 0; i < NUM_IMG; i++) {
    $("#images").append($("<img>",
    {
      src: "./slides/" + images[i],
      alt: images[i]
    }));
  }
});
