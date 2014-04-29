var images = [
'BBB_Lehigh_4.JPG',
'BBB_Lehigh_1.JPG',
'BBB_Lehigh_2.JPG',
'BBB_Lehigh_3.JPG',
'BBB_NoMA_1.JPG',
'BBB_NoMA_2.JPG',
'BBB_NMAH_FFandE_1.JPG',
'BBB_NMAH_FFandE_2.JPG',
'BBB_FourMileRun_1.JPG',
'BBB_FourMileRun_2.JPG',
'BBB_FourMileRun_3.JPG',
'BBB_FourMileRun_4.JPG',
'BBB_FL_NewRiverMasterPlan_1.JPG',
'BBB_FL_NewRiverMasterPlan_2.JPG',
'BBB_FL_NewRiverMasterPlan_3.JPG',
'BBB_FL_ArtsDistrict_PublicMeeting.JPG',
'CB_SeametreySchool.JPG'
];

var NUM_IMG = images.length;

$( document ).ready(function( ) {

  $('#fullpage').fullpage({
        slidesColor : ['#006363', "white", '#006363','#006363','#006363','#006363','#006363','#006363','#006363'],
});

  for (var i = 0; i < NUM_IMG; i++) {
    $("#images").append($("<img>",
    {
      src: "./slides/" + images[i],
      alt: images[i]
    }));
  }
});
