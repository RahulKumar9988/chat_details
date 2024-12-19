export const parseChat = (rawText) => {
    const messages = rawText.split("\n");
    const links = [];
    const quotes = [];
    const notes = [];
    const frequency = {};
  
    messages.forEach((msg) => {
      if (msg.includes("http")) links.push(msg.match(/https?:\/\/[^\s]+/)[0]);
      else if (msg.includes('"')) quotes.push(msg.match(/"([^"]*)"/)[1]);
      else notes.push(msg);
  
      const dateMatch = msg.match(/\d{1,2}\/\d{1,2}\/\d{2,4}/);
      if (dateMatch) {
        const date = dateMatch[0];
        frequency[date] = (frequency[date] || 0) + 1;
      }
    });
  
    return { links, quotes, notes, frequency };
  };
  