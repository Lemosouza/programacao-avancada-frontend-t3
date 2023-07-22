  let containerA = new ProgressBar.Circle(circleA, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: true
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 1097);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });

  let containerB = new ProgressBar.Circle(circleB, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: true
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 1097);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });

  let containerC = new ProgressBar.Circle(circleC, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: true
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 1097);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });

  let containerD = new ProgressBar.Circle(circleD, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: true
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 1097);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });

  containerA.animate(1.0);
  containerB.animate(1.0);
  containerC.animate(1.0);
  containerD.animate(1.0);

  // paralax
  $('#data-area').parallax({imageSrc: 'img/cidadepallax.png'})
  $('#apply-content').parallax({imageSrc: 'img/patter.png'})

