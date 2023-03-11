const summaryTopics = document.querySelector('.summary__topics');
const score = document.querySelector('.scored');
const total = document.querySelector('.total');

const renderSummary = function (data) {
  const html = `
    <li class="summary__topic [ flex bg-accent-${data.category.toLowerCase()} ]">
      <img
        src=${data.icon}
        alt=""
        aria-hidden="true"
        class="icon"
      />
      <h3 class="topic-heading [ fg-accent-${data.category.toLowerCase()} ]">${
    data.category
  }</h3>
      <div class="topic-score">
        <span class="get">${data.score}</span>/<span class="outof">${
    data.total
  }</span>
      </div>
    </li>`;
  summaryTopics.insertAdjacentHTML('beforeend', html);
};

const renderScore = function (data) {
  let s = (t = i = 0);
  data.forEach((el) => {
    s += el.score;
    t += el.total;
    i++;
  });
  score.innerText = Math.trunc(s / i);
  total.innerText = Math.trunc(t / i);
};

const summaryData = function (json) {
  fetch(`./${json}`)
    .then((response) => {
      if (!response.ok) return;
      summaryTopics.innerHTML = '';
      return response.json();
    })
    .then((data) => {
      renderScore(data);
      data.forEach((el) => renderSummary(el));
    });
};

summaryData('./data.json');
