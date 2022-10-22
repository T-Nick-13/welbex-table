const db = require('../db');

class RecordContrloller {
  async addRecord(req, res) {
    const {date, title, amount, distance} = req.body;
    const newRecord = await db.query(
      'INSERT INTO activity (date, title, amount, distance) values ($1, $2, $3, $4) RETURNING *', [date, title, amount, distance]
    );
    res.json(newRecord.rows[0]);
  }

  async getRecords(req, res) {
    const records = await db.query('SELECT * FROM activity');
    res.json(records.rows);
  }

  async getRecord(req, res) {
    const id = req.params.id;
    const record = await db.query(
      'SELECT * FROM activity where id = $1', [id]
    );
    res.json(record.rows[0]);
  }

  async updateRecord(req, res) {
    const {id, date, title, amount, distance} = req.body;
    const newRecord = await db.query(
      'UPLDATE activity set date = $1, title = $2, amount = $4, distance = $5 where id = $6 RETURNING *', [date, title, amount, distance, id]
    );
    res.json(newRecord.rows[0]);
  }

  async deleteRecord(req, res) {
    const id = req.params.id;
    const record = await db.query(
      'DELETE * FROM activity where id = $1', [id]
    );
    res.json(record.rows[0]);
  }
}

module.exports = new RecordContrloller();
