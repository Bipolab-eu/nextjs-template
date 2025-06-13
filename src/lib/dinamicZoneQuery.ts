export const populateDinamicZoneQuery = {
  blocks: {
    on: {
      'blocks.accordion': true,
      'blocks.carousel': {
        populate: 'media'
      },
      'blocks.header': {
        populate: true
      },
      'blocks.hero': {
        populate: 'cover'
      },
      'blocks.rich-text': true,
      'blocks.testimonial': true,
      'blocks.video': true,
    }
  }
}
