<template>
  <SchemaOrgLocalBusiness name="Lovina Dolphin Tours " image="/1.webp"
    description="Looking for an unforgettable experience in Lovina? Our expert-guided dolphin tours offer a unique opportunity to witness these magnificent creatures in their natural habitat. Choose from a range of tour options to suit your budget and schedule. Book now and embark on a thrilling adventure at Lovina Beach!."
    telephone="+6283832053665" :address="{
      streetAddress: 'Spice beach club, jln, Kaliasem, Kec. Banjar, Kabupaten Buleleng, Bali',
      addressLocality: 'Kadek Suara',
      addressRegion: 'IDN',
      postalCode: '81152',
      addressCountry: 'Indonesia',
    }" />
  <SchemaOrgReview 
  author="Bhakti Pratama"
  itemReviewed="Swimming With Dolphin Tour Package"
  
    :reviewRating="{
    
    ratingValue: '5',
    bestRating: '5',}"
    :defineAggregateOffer="{
      offerCount:'4',
      lowPrice:'80000',
      highPrice:'250000',
      priceCurrency:'IDR'

    }"
    :defineAggregateRating="{
      ratingValue: '5.0',
      reviewCount: '20'
    }"
  

  
   />
  
  <SchemaOrgWebSite name="Lovina Dolphin Tours" />
  <SchemaOrgWebPage :type="['CollectionPage', 'SearchResultsPage']" />
</template>
  