// 성능 최적화를 위해서는 모든 패키지를 불러오는게 아니라 쓰는 컴포넌트
// 만 가져와서 사용하자.

import Dropdown from 'bootstrap/js/dist/dropdown'

const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))