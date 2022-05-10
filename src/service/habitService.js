import axios from 'axios';

class HabitService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * 취미 전체조회
   */
  getHabits = async () => {
    return await axios
      .get(this.baseUrl + '/habit')
      .then((result) => result.data);
  };

  /**
   * 취미 카운트 변경
   * @param {*} habit
   */
  onChangeCount = async (habit, count) => {
    return await axios.put(this.baseUrl + '/habit/' + habit.id, {
      count,
    });
  };

  /**
   * 취미 등록
   * @param {*} name
   */
  onAdd = async (name) => {
    return await axios.post(this.baseUrl + '/habit', {
      name,
      count: 0,
    });
  };

  /**
   * 취미 삭제
   * @param {*} habit
   */
  onRemove = async (habit) => {
    return await axios.delete(this.baseUrl + '/habit/' + habit.id);
  };

  /**
   * 전체 카운트 초기화
   */
  onReset = async () => {
    return await axios.put(this.baseUrl + '/habit');
  };
}
export default HabitService;
