module.exports = {
    name: 'apple',
    description: 'Test Command.',
    execute(message) {
      message.channel.send('Apple est elle une marque de luxe ! Siri est mon meilleur ami.');
    }
  };